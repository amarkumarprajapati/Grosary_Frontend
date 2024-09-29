import React, { useState } from "react";
import { motion } from "framer-motion";

const Nearseststore = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between mx-16  items-center my-10">
        <h1 className="font-semibold text-2xl">
          Available stores in: Your Area{" "}
        </h1>
      </div>

      <div className=" flex justify-between mx-16">
        <div className=" w-full h-[100vh] ">
          <div className="border-b border-gray-200">
            <nav
              className="flex  mx-5 w-fit gap-10  justify-between "
              aria-label="Tabs"
              role="tablist">
              <button
                type="button"
                className={`hs-tab-active:font-semibold h-10 my-5  bg-white px-10 rounded-lg hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ${
                  activeTab === 1 ? "hs-tab-active" : ""
                }`}
                onClick={() => handleTabClick(1)}
                id="tabs-with-underline-item-1"
                data-hs-tab="#tabs-with-underline-1"
                aria-controls="tabs-with-underline-1"
                role="tab">
                Delivery
              </button>
              <button
                type="button"
                className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 bg-white px-10 rounded-lg hs-tab-active:text-blue-600 my-5 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ${
                  activeTab === 2 ? "hs-tab-active" : ""
                }`}
                onClick={() => handleTabClick(2)}
                id="tabs-with-underline-item-2"
                data-hs-tab="#tabs-with-underline-2"
                aria-controls="tabs-with-underline-2"
                role="tab">
                Pickup
              </button>
              <button
                type="button"
                className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 bg-white px-10 rounded-lg hs-tab-active:text-blue-600 my-5 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ${
                  activeTab === 3 ? "hs-tab-active" : ""
                }`}
                onClick={() => handleTabClick(3)}
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab">
                Shippin
              </button>
            </nav>
          </div>

          <div className="mt-3 bg-white w-fit">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
              className={`${activeTab === 1 ? "" : "hidden"}`}>
              {/* Content for Tab 1 */}
              <div className="searchbox26">
                <div className="serchbox1">
                  <div className="box123">
                    {/* 1 */}
                    <motion.img
                      src="grocery_store_logo_4x.png"
                      alt="image"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-2"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
              className={`${activeTab === 2 ? "" : "hidden"}`}>
              {/* Content for Tab 2 */}
              <div className="box123">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="jgbjn,.png"
                  alt="image"
                  className="imagebox2"
                />
                <h1>Checf Special</h1>
                <p>min.50rs</p>
              </div>
            </div>
            <div
              id="tabs-with-underline-3"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
              className={`${activeTab === 3 ? "" : "hidden"}`}>
              {/* Content for Tab 3 */}
              <div className="box123">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="jgbjn,.png"
                  alt="image"
                  className="imagebox2"
                />
                <h1>Checf Special</h1>
                <p>min.50rs</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="">
            Sort by:
            <select className="">
              <option className="">Most popular</option>
              <option>All Store</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nearseststore;
