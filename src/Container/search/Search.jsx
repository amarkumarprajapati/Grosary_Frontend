import React, { useRef } from "react";
import { button_details } from "./data";

const Search = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Back to all stores</h1>
        </div>
        <div>
          <p>10 search results for your search</p>
        </div>
      </div>
      <div
        className="slider-container  w-[90%] m-auto overflow-hidden"
        ref={containerRef}>
        <div className=" px-4 py-5 flex gap-10  m-auto  ">
          {button_details.button_1.map((item, index) => (
            <button
              key={index}
              className="bg-white px-5 py-2 flex-grow-0 flex-shrink-0 min-w-0 border-2 rounded border-gray-200 ">
              {item.Chocolate}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button onClick={scrollLeft} className="relative bottom-14 mx-10 ">
          &#8592;
        </button>
        <button onClick={scrollRight} className="relative bottom-14 mx-10">
          &#8594;
        </button>
      </div>
      <hr className="w-full h-1" />
      <div>
        <div className="justify-between  items-center flex">
          <div className=" px-10 py-5 flex items-center gap-5  w-fit">
            <button className="bg-blue-800 px-3 py-3 ">
              <img src="/public/filter.png" className="w-5   " alt="" />
            </button>
            <p>Filter by:</p>
            <div className="flex gap-4 flex-grow-0 flex-shrink-0 min-w-0">
              <button className="border-2 px-4 py-3 rounded-lg">Brand</button>
              <button className="border-2 px-4 rounded-lg">Dietary</button>
              <button className="border-2 px-4 rounded-lg">Size</button>
              <button className="border-2 px-4 rounded-lg">Offer</button>
            </div>
          </div>
          <div className="mx-16 border-2 py-2 rounded-lg px-5">
            <label htmlFor="sort">Short by:</label>
            <select name="sort" id="sort">
              <option value="">Most popular</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex px-10 py-10 ">
        <div className="bg-gray-100 flex rounded-lg flex-col gap-6 px-5 py-5">
          <h1>Price range</h1>
          <div className="flex">
            <input type="text" className="w-36 rounded-lg" placeholder="" />
            <input
              type="text"
              className="mx-2 w-36 rounded-lg"
              placeholder=""
              name=""
              id=""
            />
          </div>
          <input type="range" className="w-full" name="" id="" />

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              Brand
            </label>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Brand A</p>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Brand B</p>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Brand C</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Dietray</p>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p>Lactose-free</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p>Suga-free</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p>Vegan</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Flavor</p>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p>Suga-free</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p>Suga-free</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p>Suga-free</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-blue-500 h-[50vh] w-full">
            <div>
              <div>
                <div className="border-1 bg-violet-600">
                  <img src="/public/Baking-Bar.png" className="w-24" alt="" />
                  <p>Chocolate</p>
                  <div>
                    <p>$3.49/pc</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
