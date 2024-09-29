import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); 

  const gotoHomePage = () => {
    navigate("/"); 
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-5 py-5">
        <div className="mb-5 sm:mb-0">
          <h1
            className="lg:text-5xl font-semibold text-[#458C93] sm:text-5xl cursor-pointer"
            onClick={gotoHomePage}
          >
            ontheshelf
          </h1>
        </div>
        <div className="mx-10 sm:mx-0 flex flex-row sm:flex-col lg:flex-row gap-5 items-center">
          <Link to="/login">
            <button className="px-10 py-3 bg-[#40878E] rounded-xl text-white">
              Login / Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
