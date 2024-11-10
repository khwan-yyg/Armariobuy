import React from "react";
import { assets } from "../assets/assets";

const Orders = () => {
  return (
    <div>
      <h3>Order Page</h3>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700">
          <img className="w-12" src={assets.parcel_icon} alt="" />

          <div>
            <div>
              <p className="py-0.5">
                Kid Tapered Slim Fit Trouser x 1 <span> XL </span>
              </p>
            </div>

            <p className="mt-3 mb-2 font-medium">name customer</p>

            <div>
              <p>Adress</p>
              <p>Adress, Phan Chiang rai, Thai, 57120</p>
            </div>
          </div>

          <div>
            <p className="text-sm sm:text-[15px]">Items : 1</p>
            <p className="mt-3">Method : COD</p>
            <p>Payment : Pending</p>
            <p>Date : 11/9/2024</p>
          </div>

          <p className="text-sm sm:text-[15px]">$50</p>

          <select className="p-2 font-semibold">
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Orders;
