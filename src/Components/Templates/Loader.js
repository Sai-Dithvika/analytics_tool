import { CircularProgress } from '@mui/material';
import React from 'react'


const Loader = () => {
  return (
        <div className='w-full flex flex-col text-center gap-10 p-5 pt-32'>
        <CircularProgress className='m-auto' />
        <h3>Good things take time. Stay tuned for insightful data.</h3>
      </div>
  );
}

export default Loader;
