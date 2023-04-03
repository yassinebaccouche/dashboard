import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import ThemeSettings from './components/ThemeSettings';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <Navigation currentMode={currentMode} currentColor={currentColor} />
        {themeSettings && <ThemeSettings setThemeSettings={setThemeSettings} />}
      </BrowserRouter>
    </div>
  );
};

export default App;
