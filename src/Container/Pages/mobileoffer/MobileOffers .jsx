import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mobileOffers = [
  { id: 1, title: "Mobile 1", price: "$299", image: "/path/to/mobile1.jpg" },
  { id: 2, title: "Mobile 2", price: "$399", image: "/path/to/mobile2.jpg" },
  { id: 3, title: "Mobile 3", price: "$499", image: "/path/to/mobile3.jpg" },
  { id: 4, title: "Mobile 4", price: "$599", image: "/path/to/mobile4.jpg" },
  { id: 5, title: "Mobile 5", price: "$699", image: "/path/to/mobile5.jpg" },
  { id: 6, title: "Mobile 6", price: "$799", image: "/path/to/mobile6.jpg" },
  // Add more mobile products as needed
];

const MobileOffers = () => {
  const sliderRef = useRef(null); // Create a reference for the slider

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    arrows: false, // Disable default arrows
  };

  return (
    <section className="p-6 bg-gray-50">
      <div className="flex align-super justify-between items-center">
        <div className="text-3xl font-bold text-center mb-6">Mobile Offers</div>
        <div className="flex justify-center mt-4">
          <button className="bg-[#468D93] text-white px-6 py-2 rounded hover:bg-[#3a7a7f]">
            View All
          </button>
        </div>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {mobileOffers.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
          onClick={() => sliderRef.current.slickPrev()}
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
          onClick={() => sliderRef.current.slickNext()}
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
};

export default MobileOffers;
