import React from 'react';

const DateInput = ({ placeholder, name, value, onChange }) => {
  const handleFocus = (e) => {
    e.target.type = "date";
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.type = "text";
    }
  };

  return (
    <input
      placeholder={placeholder}
      name={name}
      type={value ? "date" : "text"}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      onChange={onChange}
      className="h-full w-auto min-w-lg bg-slate-200 shadow-lg rounded-sm p-2"
    />
  );
};

export default DateInput;
