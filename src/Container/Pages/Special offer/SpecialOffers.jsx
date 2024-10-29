import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../../../Components/Rusable/ProductCard";

const specialOffers = [
  { id: 1, title: "Product 1", price: "$25", image: "/path/to/image1.jpg" },
  { id: 2, title: "Product 2", price: "$30", image: "/path/to/image2.jpg" },
  { id: 3, title: "Product 3", price: "$45", image: "/path/to/image3.jpg" },
  { id: 4, title: "Product 4", price: "$55", image: "/path/to/image4.jpg" },
  { id: 5, title: "Product 5", price: "$20", image: "/path/to/image5.jpg" },
  { id: 6, title: "Product 6", price: "$35", image: "/path/to/image6.jpg" },
  { id: 7, title: "Product 7", price: "$40", image: "/path/to/image7.jpg" },
  { id: 8, title: "Product 8", price: "$50", image: "/path/to/image8.jpg" },
  { id: 9, title: "Product 9", price: "$60", image: "/path/to/image9.jpg" },
  { id: 10, title: "Product 10", price: "$70", image: "/path/to/image10.jpg" },
];

const SpecialOffers = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Show 5 cards at once
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="p-6 bg-gray-50 relative">
      <div className="text-3xl font-bold text-center mb-6">Special Offers</div>
      
      {/* Slider */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {specialOffers.map((item) => (
          <div key={item.id} className="flex justify-center" style={{ padding: '0 4px' }}> {/* Reduced padding */}
            <div className="w-40"> {/* Fixed width for ProductCard */}
              <ProductCard {...item} />
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
