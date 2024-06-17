

const BoxT = ({data}) => {
  
  return (
    <div className="flex flex-row w-[200px] h-[100px] rounded-md bg-[#149da1] text-white p-2 m-2">
      <div className='flex flex-1 flex-col justify-center align-middle text-center'>
      <h4>{data.label}</h4>
      <p>{data.userCount}</p>
      </div>
    </div>
  );
}

export default BoxT;