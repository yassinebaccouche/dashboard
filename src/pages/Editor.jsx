import React, { useState, useEffect } from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import { ColorPicker } from '@syncfusion/ej2-react-inputs';
import { Sidebar } from '../components';

const Editor = () => {
  const [editorContent, setEditorContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchPostContent() {
      try {
        const response = await fetch(`http://localhost:5002/Editor/Editor/640a1d60df40b55b982f1d22`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        const responseData = await response.json();
        setEditorContent(responseData.post.editor);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
    }
    fetchPostContent();
  }, []);

  const handleContentChange = (e) => {
    setEditorContent(e.value);
  };

  useEffect(() => {
    async function updatePostContent() {
      try {
        const response = await fetch(`http://localhost:5002/Editor/Editor/640a1d60df40b55b982f1d22`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            editor: editorContent
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const responseData = await response.json();
        console.log(responseData.message, responseData.post);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
    }
    updatePostContent();
  }, [editorContent]);
  return (
    <div className="flex">
      <div className="w-1/5 ">
        <Sidebar />
      </div>
      <div className="w-4/5 m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="Editor" />
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <RichTextEditorComponent value={editorContent} change={handleContentChange}>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>
  );
  
};

export default Editor;
