import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import ReportNavbar from './NavBars/ReportNavbar';
import Realtimenavbar from './NavBars/Realtimenavbar';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState('Realtime');
  var path = location.pathname;
  var pattern = /^\/realtime/g;

  useEffect(() => {
    path = location.pathname;
    pattern = /^\/realtime/g;
    if (pattern.test(path)) {
      setButtonText('Back');
    } else {
      setButtonText('Realtime');
    }
  }, [location.pathname]);

  const handleNavigation = () => {
    if (location.pathname === '/realtime') {
      navigate('/');
    } else {
      navigate('/realtime');
    }
  };

  return (
    <div className="bg-white flex flex-wrap w-full h-[70px] justify-between items-center shadow-xl px-4 md:px-8 lg:px-16">
      <div className="text-[20px] md:text-[30px] font-semibold">
        <span className="text-[#149da1]">Dash</span>
        <span className="text-[#2E96FF]">Board</span>
      </div>
      {!(pattern.test(path)) ? <ReportNavbar /> : <Realtimenavbar />}

      <div
        onClick={handleNavigation}
        className="flex text-[#149da1] p-2 w-[80px] md:w-[100px] justify-center items-center h-[40px] text-[16px] md:text-[20px] rounded-md hover:bg-[#149da1] hover:text-white cursor-pointer border border-[#149da1]"
      >
        {buttonText}
      </div>
    </div>
  );
}

export default Navbar;
