import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-4 shadow-lg bg-white dark:bg-gray-800">
      {/* Logo */}
      <div className="mb-5 sm:mb-0 cursor-pointer" onClick={gotoHomePage}>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#458C93]">
          ontheshelf
        </h1>
      </div>

      {/* Search Bar */}
      <form className="flex-grow max-w-md mx-4 relative">
        <input
          type="search"
          className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-300 text-sm text-gray-700 focus:ring-2 focus:ring-[#458C93] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Search products..."
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-2 text-white bg-[#458C93] p-2 rounded-lg hover:bg-blue-700"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>

      {/* Icons and Actions */}
      <div className="flex items-center gap-6">
        <Link
          to="/wishlist"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#458C93]"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3l1.646 1.646a8 8 0 0111.314 0L20 3v9h-3a3 3 0 00-3 3v3h-3l-1 3h4"
            />
          </svg>
          <span className="hidden sm:inline">Wishlist</span>
        </Link>

        <Link
          to="/cart"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#458C93]"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18l-2 10H5L3 3zM6 22a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          <span className="hidden sm:inline">Cart</span>
        </Link>

        <Link
          to="/location"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#458C93]"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2a7 7 0 017 7c0 4-7 13-7 13s-7-9-7-13a7 7 0 017-7z"
            />
          </svg>
          <span className="hidden sm:inline">Location</span>
        </Link>

        <Link to="/login">
          <button className="px-4 py-2 text-white bg-[#40878E] rounded-lg hover:bg-[#458C93]">
            Login / Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
