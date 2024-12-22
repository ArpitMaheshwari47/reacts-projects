import React from "react";
import Sidebar from "./Sidebar";
import CustomContainer from "./CustomContainer";

const Body = () => {
  return <div className="flex">
    <Sidebar/>
    <CustomContainer/>
  </div>;
};

export default Body;
