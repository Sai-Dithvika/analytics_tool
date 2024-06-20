import React from 'react';
import { Link } from 'react-router-dom';

const Realtimenavbar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-[16px] md:text-[20px] space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
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
  );
}

export default Realtimenavbar;
