import React from 'react'
import FormData from '../../Charts/RealTime_Report/FormData'
import useDataStore from '../../../Store/useDataStore';
import Loader from '../../Templates/Loader';

const FormSubmissionPage = () => {
  const {loader}=useDataStore();
  console.log(loader,"lll");
  return (
    <>
    <div className={'flex flex-wrap justify-center items-center h-[90vh] '+(loader?"hidden":"")}>
      <div className="flex flex-col  justify-between items-center box-content h-[60vh] w-[35vw] p-4 m-auto shadow-2xl rounded-lg">
      <h3>Form Submissions</h3>
        <FormData />
      </div>
    </div>
    {loader==1 &&
      <Loader/>}
</>
  )
}

export default FormSubmissionPage
