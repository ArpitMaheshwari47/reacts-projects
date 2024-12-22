import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 mx-4 gap-2">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="img"
          src="https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg"
        />
        <img
          className="h-8"
          alt="youtube-icon"
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        />
      </div>
      <div className="col-span-10 pl-[16rem]">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="img"
          src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
