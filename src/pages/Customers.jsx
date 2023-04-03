import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import Sidebar from '../components/Sidebar';
import { Header } from '../components';

const Customers = () => {
  const [users, setUsers] = useState([]);
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    fetch("http://localhost:5002/user/Alluser")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  },
  []);

  const customersData = users;
  const customersGrid = [

    
 
    {
      headerText: 'Profile Picture',
      template: (data) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={`http://localhost:5002/img/${data.image}`}
              alt="Profile"
              width="40"
              height="40"
              style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #ccc' }}
            />
          </div>
        );
      },
      width: 100,
    },
    
    
    { field: 'first_name', headerText: 'First Name', width: 120 },
    { field: 'last_name', headerText: 'Last Name', width: 120 },
    { field: 'email', headerText: 'Email', width: 200 },
    { field: 'createdAt', headerText: 'Created At', width: 120 },
    { field: 'experience', headerText: 'Experience', width: 120 },
    { field: 'verified', headerText: 'Verified', width: 150 },
    { field: '_id', headerText: 'ID', textAlign: 'Center', width: 100 },
  ];

  return (
    <div className="flex">
    <div className="w-1/5 ">
     <Sidebar />
   </div>

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
    </div>
  );
};

export default Customers;