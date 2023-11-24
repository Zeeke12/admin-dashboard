import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Side';

const showSidebar = () => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    // Create a container div for the sidebar
    const sidebarContainer = document.createElement('div');
    rootElement.appendChild(sidebarContainer);

    const closeSidebar = () => {
      // Unmount the Sidebar component and remove the container
      ReactDOM.unmountComponentAtNode(sidebarContainer);
      sidebarContainer.remove();
    };

    // Render Sidebar inside the container
    ReactDOM.render(<Sidebar onClose={closeSidebar} />, sidebarContainer);
  } else {
    console.error('Root element not found.');
  }
};

export default showSidebar;