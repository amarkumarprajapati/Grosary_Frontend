import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { data } from "./Store";
import { workdata } from "./howwork";
import Footer from "../../../common/Footer";
import Hero from "../../Pages/Hero";
import {
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaTruck,
  FaShoppingCart,
  FaMobileAlt,
  FaTabletAlt,
  FaLaptop,
  FaApple,
  FaTv,
  FaSnowflake,
  FaCogs,
  FaBoxOpen,
  FaBlender,
  FaTags,
} from "react-icons/fa";
import SpecialOffers from "../Special offer/SpecialOffers";
import MobileOffers from "../mobileoffer/MobileOffers ";

const Home = () => {
  const navigate = useNavigate();

  const servicelist = [
    { icon: <FaClipboardCheck />, title: "Service Requests" },
    { icon: <FaMapMarkedAlt />, title: "Service Tracking" },
    { icon: <FaTruck />, title: "Delivery Tracking" },
    { icon: <FaShoppingCart />, title: "Buying Points" },
  ];

  const categoryList = [
    { icon: <FaTags />, title: "New Arrivals" },
    { icon: <FaMobileAlt />, title: "Mobiles" },
    { icon: <FaTabletAlt />, title: "Tablets" },
    { icon: <FaLaptop />, title: "Laptops" },
    { icon: <FaApple />, title: "Apple" },
    { icon: <FaTv />, title: "Television" },
    { icon: <FaBoxOpen />, title: "Refrigerators" },
    { icon: <FaCogs />, title: "Washing Machine" },
    { icon: <FaSnowflake />, title: "Air Conditioners" },
    { icon: <FaBlender />, title: "Kitchen Appliances" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Service Section */}
      <div className="flex justify-center bg-gray-50 p-6 gap-6">
        {servicelist.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 rounded-lg border border-gray-200 relative cursor-pointer"
          >
            <span className="text-3xl text-[#468D93]">{item.icon}</span>
            <h1 className="font-semibold text-xl text-[#468D93] mt-2">
              {item.title}
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#468D93] scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </div>
        ))}
      </div>

      {/* Category Section */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">
          Categories
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {categoryList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:text-[#468D93] transition duration-200 cursor-pointer"
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="text-lg font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <SpecialOffers />
      <MobileOffers />

      {/* Popular Stores Section */}
      <div className="p-6 bg-white">
        <div className="text-3xl font-semibold text-center mb-4">
          Popular Stores
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(data).map((key) => (
            <motion.div
              key={key}
              className="w-80 bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              {data[key].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.store}
                    className="w-24 h-24"
                  />
                  <p className="mt-2 text-lg text-gray-500">{item.store}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section className="p-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How It Works?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(workdata).map((key) => (
            <motion.div
              key={key}
              className="w-64 p-6 bg-[#6AAEB4] rounded-lg shadow-lg text-white"
              whileHover={{ scale: 1.1 }}
            >
              {workdata[key].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold">{item.h1tag}</h3>
                  <p className="mt-2">{item.ptag}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
