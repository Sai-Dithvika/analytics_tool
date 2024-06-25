import React from 'react'
import FormSubmit from '../Charts/Report_Data/FormSubmit';
import Loader from '../Templates/Loader';
import useDataStore from '../../Store/useDataStore';

function FormSubmissionPage() {
  const {loader}=useDataStore();
  return (
    <>
    <div className={"flex flex-wrap justify-center items-center h-[90vh] "+(loader?"hidden":"")}>
      <FormSubmit />
    </div>
    {loader==1 &&
      <Loader/>}
    </>
  );
}

export default FormSubmissionPage
