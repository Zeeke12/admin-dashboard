import './App.css';
import Topbar from './component/Topbar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className='bg-[#f6f6f9] dark:bg-[#181A1E] min-h-screen transition-colors'>
      <Topbar />
    <div className="bg-[#f6f6f9] dark:bg-[#181A1E] min-h-screen transition-colors px-4 md:pl-5">
      <Dashboard />
    </div>
    </div>
  );
}

export default App;
