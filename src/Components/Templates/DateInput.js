const DateInput = ({value, onChange }) => {

  return (
    <input
      type= "date"
      value={value}
      onChange={onChange}
      className="h-full w-auto min-w-lg bg-slate-200 shadow-lg rounded-sm p-2"
    />
  );
};

export default DateInput;
