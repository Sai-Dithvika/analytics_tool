import React from 'react'
import { Link } from 'react-router-dom';

const Realtimenavbar = () => {
  return (
    <div className="flex flex-1 flex-wrap justify-center items-center text-[20px] text-black space-x-[100px]">
        <Link
          to="/realtime/demographic-data"
          className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
        >
          Demographic
        </Link>
        <Link
          to="/realtime/user-page"
          className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
        >
          Users
        </Link>
        
        <Link
          to="/realtime/form-data"
          className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
        >
          FormSubmissions
        </Link>
      </div>
  )
}

export default Realtimenavbar;
