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
    <button onClick={toggleDarkMode} className='flex-row flex'>
      <div className={`${
        darkMode ? 'bg-#181A1E' : 'bg-blue-400'} p-2 rounded-md`}>
      <ion-icon name='partly-sunny-outline'></ion-icon>
      </div>
      <div className={`${
        darkMode ? 'bg-blue-400': 'bg-#181A1E'  } p-2 rounded-md`}>
      <ion-icon name='moon-outline'></ion-icon>
      </div>
    </button>
  );
};

export default DarkModeBtn;
