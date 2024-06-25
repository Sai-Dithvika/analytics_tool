import React from 'react'
import RegionData from '../Charts/Report_Data/RegionData'
import useDataStore from '../../Store/useDataStore'
import Loader from '../Templates/Loader'
const DemographicPage = () => {
  const {loader}=useDataStore();
  return (
    <>
    <div className={"flex flex-wrap justify-center items-center h-[80vh] "+(loader?"hidden":"")}>
      <RegionData />
    </div>
                {loader==1 &&
                  <Loader/>}
                </>
  );
}

export default DemographicPage