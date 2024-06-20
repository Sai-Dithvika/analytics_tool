import React from 'react'
import { Link } from 'react-router-dom';

const ReportNavbar = () => {
  return (
    <div className="flex justify-between items-center text-[20px] text-black space-x-[100px] ">
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
  )
}

export default ReportNavbar
