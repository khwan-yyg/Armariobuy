import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between border-b sticky top-0 left-0 z-50 bg-gray-50">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={handleClick}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
