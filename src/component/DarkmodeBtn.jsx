import React, { useEffect, useState } from 'react';

const DarkModeBtn = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button onClick={toggleDarkMode} className={`${
        darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gray-200 text-gray-800'
      } p-2 rounded-md hover:bg-gray-600`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeBtn;
