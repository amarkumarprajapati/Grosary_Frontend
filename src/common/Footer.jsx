import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white w-full px-[15px] mx-auto">
      {/* Subscription Section */}
      <div className=" max-w-fit m-auto justify-between ">
        <div className="flex flex-col md:flex-row w-[1456px] justify-between items-center py-8 px-[15px] border-b border-gray-700 mx-auto">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Fear Of Missing Out?</h2>
            <p>Get THE LATEST DEALS, UPDATES & MORE</p>
          </div>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md text-white font-semibold">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
     <div className="m-auto justify-between max-w-[1456px]">
     <div className="flex flex-col md:flex-row justify-between px-6 py-10   ">
        {/* Shop Links */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul>
            <li>Mobile & Tablets</li>
            <li>Laptop & Computers</li>
            <li>Television & Audio</li>
            <li>Home Appliances</li>
            <li>Offers</li>
            <li>Blogs</li>
          </ul>
        </div>
        {/* About Links */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Stores</li>
            <li>FAQ</li>
            <li>Careers</li>
          </ul>
        </div>
        {/* Policy Links */}
        <div>
          <h3 className="font-semibold mb-4">Policy</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-4">Head Office</h3>
          <p>Ward-13/ 195-B,195-C,195-D,195-E, St.Antonys Arcade</p>
          <p>Opposite to Nehru Stadium, Nagampadom</p>
          <p>Kottayam, Kerala 686001- India</p>
          <h3 className="font-semibold mt-4">Email Support</h3>
          <p>support@oxygendigitalshop.com</p>
          <h3 className="font-semibold mt-4">Showroom Related Enquiries</h3>
          <p>+91 9020100100</p>
        </div>
      </div>
     </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-700">
        <p>© 2024 OnTheShelf. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
