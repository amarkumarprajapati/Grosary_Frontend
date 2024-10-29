import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for arrows

const specialOffers = [
  { id: 1, title: "Product 1", price: "$25", image: "/path/to/image1.jpg" },
  { id: 2, title: "Product 2", price: "$30", image: "/path/to/image2.jpg" },
  { id: 3, title: "Product 3", price: "$45", image: "/path/to/image3.jpg" },
  { id: 4, title: "Product 4", price: "$55", image: "/path/to/image4.jpg" },
  // Add more products as needed
];

const SpecialOffers = () => {
  const sliderRef = useRef(null); // Create a reference for the slider

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null, // Remove default next arrow
    prevArrow: null, // Remove default previous arrow
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="p-6 bg-gray-50 relative">
      <div className="text-3xl font-bold text-center mb-6">Special Offers</div>
      <Slider ref={sliderRef} {...sliderSettings}>
        {specialOffers.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#468D93] rounded-full p-2 text-white shadow hover:bg-[#3a7a7f] z-10"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#468D93] rounded-full p-2 text-white shadow hover:bg-[#3a7a7f] z-10"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight className="text-xl" />
      </button>

      <div className="flex justify-center mt-4">
        <button className="bg-[#468D93] text-white px-6 py-2 rounded hover:bg-[#3a7a7f]">
          View All
        </button>
      </div>
    </section>
  );
};

export default SpecialOffers;
