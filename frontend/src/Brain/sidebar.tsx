import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LogOut, BadgePlus, Eye, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { ReactNode } from 'react';

function Sidebar({ children }: { children: ReactNode }) {
  const [toggleMenu, setToggleMenu] = useState(false);  // State to manage the sidebar visibility
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setToggleMenu(!toggleMenu);  // Toggle the menu state
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <div className={`lg:flex ${toggleMenu ? 'block' : 'hidden lg:block'} bg-gray-700 lg:w-64 w-full lg:sticky top-0 transition-all duration-300 z-10`}>
        <div className='flex flex-col font-poppins w-full'>
          {/* Header */}
          <div className='flex p-2 mt-1 items-center'>
            <Brain className='text-white w-10 h-10' />
            <h1 className='text-xl text-white ml-2'>Second Brain</h1>
          </div>

          {/* Divider */}
          <div className='bg-gray-800 h-0.5'></div>

          {/* Links */}
          <div className='mt-10'>
            <Link to='/brain' className='p-2 lg:text-lg font-semibold text-white flex items-center'>
              Create Brain <BadgePlus className="ml-1" />
            </Link>

            <div className='mt-10'>
              <Link to='/page' className='p-2 lg:text-lg font-semibold text-white flex items-center'>
                View Brain <Eye className="ml-1" />
              </Link>
            </div>

            <div className='mt-10'>
              <button onClick={logout} className='p-2 text-lg font-semibold text-white flex items-center'>
                LogOut <LogOut className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-4 transition-all duration-300 ${toggleMenu ? 'ml-0 lg:ml-64' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
