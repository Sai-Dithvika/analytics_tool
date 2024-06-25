import React from 'react'
import RealTimeRegionData from '../../Charts/RealTime_Report/RealTimeRegionData'
import Loader from '../../Templates/Loader';
import useDataStore from '../../../Store/useDataStore';

const DemographicPage = () => {
  const {loader}=useDataStore();
  return (
    <>
    <div className={'flex flex-wrap justify-center items-center h-[90vh] '+(loader?"hidden":"")}>
      <div className="flex flex-col  justify-between items-center box-content h-[70vh] w-[75vw] p-4 m-auto shadow-2xl rounded-lg">
      <h3>Demographic Data</h3>
        <RealTimeRegionData /> 
      </div>
    </div>
    {loader==1 &&
      <Loader/>}
    </>
  )
}

export default DemographicPage;