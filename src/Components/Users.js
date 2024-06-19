import React, { useState } from 'react';
import TotalUsersCount from "./Charts/Report_Data/TotalUsersCount";
import LinksSection from "./LinkSection";
import RegionData from "./Charts/Report_Data/RegionData";
import Navbar from "./Navbar";
import DateInput from './Templates/DataInput';

const Users = () => {
  const [ranges, setRanges] = useState({ StartRange: "", EndRange: "" });

  const handleChange = (name) => (e) => {
    setRanges((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const inputs = [
    { placeholder: "End Range", name: "EndRange" },
    { placeholder: "Start Range", name: "StartRange" },
  ];

  return (
    <>
      <Navbar />
      <LinksSection />
      <div className="flex flex-row-reverse gap-2 mt-10 mx-10">
        {inputs.map((input) => (
          <DateInput
            key={input.name}
            placeholder={input.placeholder}
            name={input.name}
            value={ranges[input.name]}
            onChange={handleChange(input.name)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <RegionData />
      </div>
    </>
  );
};

export default Users;
