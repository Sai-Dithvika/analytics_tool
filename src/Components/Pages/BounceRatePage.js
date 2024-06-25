import React from "react";
import BounceRate from "../Charts/Report_Data/BounceRate";
import useDataStore from "../../Store/useDataStore";
import Loader from "../Templates/Loader";

const BounceRatePage = () => {
  const {loader}=useDataStore();
  return (
    <>
    <div className={"flex flex-wrap justify-center items-center h-[90vh] "+(loader?"hidden":"")}>
      <BounceRate />
    </div>
    {loader==1 &&
      <Loader/>}
  </>
  );
};

export default BounceRatePage;
