// src/Components/LinksSection.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const LinksSection = () => {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? 'text-black underline text-xl font-semibold'
      : 'text-black text-lg';
  };

  return (
    <div className="flex justify-around text-center mt-8 fon">
       
        <Link to="/link1" className={getLinkClass('/link1')}>Demographic</Link>
        <Link to="/link2" className={getLinkClass('/link2')}>Users</Link>
        <Link to="/bounce-rate" className={getLinkClass('/link3')}>BounceRate</Link>
        <Link to="/link4" className={getLinkClass('/link4')}>FormSubmissions</Link>
      
    </div>
  );
};

export default LinksSection;
