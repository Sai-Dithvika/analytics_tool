import React from 'react';
import { Link } from 'react-router-dom';

const ReportNavbar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-[16px] md:text-[20px] space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
      <Link
        to="/demographic-data"
        className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
      >
        Demographic
      </Link>
      <Link
        to="/user-page"
        className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
      >
        Users
      </Link>
      <Link
        to="/bounce-rate"
        className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
      >
        BounceRate
      </Link>
      <Link
        to="/form-data"
        className="text-black hover:text-black hover:font-bold focus:text-black focus:font-bold"
      >
        FormSubmissions
      </Link>
    </div>
  );
}

export default ReportNavbar;
