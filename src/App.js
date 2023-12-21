import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { SidebarProvider } from './component/SideBarContext';

function App() {
  return (
    <SidebarProvider>
    <div className='bg-[#F6F6F9] dark:bg-[#181A1E] transition-colors duration-100'>
      <Dashboard />
    </div>
    </SidebarProvider>
  );
}

export default App;
