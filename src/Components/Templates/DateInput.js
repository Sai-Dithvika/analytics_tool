const DateInput = ({value,onChange}) => {

  return (
    <input
      type= "date"
      onChange={onChange}
      value={value}
      className="h-full w-auto min-w-lg bg-slate-200 shadow-lg rounded-sm p-2"
    />
  );
};

export default DateInput;
