import React from "react";
import { assets } from "../assets/assets";

const List = () => {
  return (
    <div>
      <p className="mb-2">All Products List</p>

      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm">
          <img className="w-12" src={assets.upload_area} alt="" />
          <p>Kid Tapered Slim Fit Trouser</p>
          <p>Kids</p>
          <p>$38</p>
          <p className="text-right md:text-center cursor-pointer text-lg">X</p>
        </div>

        <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm">
          <img className="w-12" src={assets.order_icon} alt="" />
          <p>Kid Tapered Slim Fit Trouser</p>
          <p>Kids</p>
          <p>$38</p>
          <p className="text-right md:text-center cursor-pointer text-lg">X</p>
        </div>
      </div>
    </div>
  );
};

export default List;
