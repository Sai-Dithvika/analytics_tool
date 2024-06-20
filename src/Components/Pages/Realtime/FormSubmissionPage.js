import React from 'react'
import FormData from '../../Charts/RealTime_Report/FormData'

const FormSubmissionPage = () => {
  return (
    <div className='flex flex-wrap justify-center items-center h-[90vh]'>
      <div className="flex flex-col  justify-between items-center box-content h-[60vh] w-[35vw] p-4 m-auto shadow-2xl rounded-lg">
      <h3>Form Submissions</h3>
        <FormData />
      </div>
    </div>
  )
}

export default FormSubmissionPage
