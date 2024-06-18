// src/Components/LinksSection.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinksSection = () => {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? 'text-blue-500 underline text-lg ml-40 mr-40'
      : 'text-blue-500 text-lg ml-40 mr-40';
  };

  return (
    <div className="text-center mt-8">
      <div className="flex justify-center mt-4 gap-4">
        <Link to="/link1" className={getLinkClass('/link1')}>Demographic</Link>
        <Link to="/link2" className={getLinkClass('/link2')}>Users</Link>
        <Link to="/link3" className={getLinkClass('/link3')}>BounceRate</Link>
        <Link to="/link4" className={getLinkClass('/link4')}>FormSubmissions</Link>
      </div>
    </div>
  );
};

export default LinksSection;
