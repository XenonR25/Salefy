import React, { useState, useEffect } from "react";
// import { useState } from 'react';
import Image1 from "../assets/Sales.png"; // Adjust the path as necessary
import Image2 from "../assets/shopping.png"; // Adjust the path as necessary
import Image3 from "../assets/Cart.png"; // Adjust the path as necessary
// Removed react-slick and slick-carousel imports for custom slider

const ImageList = [
  {
    id: 1,
    src: Image1,
    alt: "Sales",
    title: "Upto 50% off on all Men's Wear",
    description: "Save big on the latest trends for men. Limited time offer!",
  },
  {
    id: 2,
    src: Image2,
    alt: "Shopping",
    title: "30% off on all Women's Wear",
    description:
      "Discover exclusive deals on women's fashion. Shop your favorites now.",
  },
  {
    id: 3,
    src: Image3,
    alt: "Cart",
    title: "70% flashsale on selected products",
    description:
      "Hurry up! Grab selected products at unbeatable prices during our flash sale.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % ImageList.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? ImageList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % ImageList.length);
  };

  const item = ImageList[current];

  return (
    <div className="relative overflow-hidden rounded-xl min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:bg-opacity-80 dark:text-white duration-250 mt-10">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-purple-500/40 absolute -top-1/2 right-0 rounded-4xl rotate-45 z-[8]"></div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center p-4 sm:items-start sm:p-8 space-y-4  order-2 sm:order-1 relative z-10">
            <h1
              data-aos="zoom-out"
              data-aos-once="true"
              data-aos-duration="500"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              {item.title}
            </h1>
            <p
              className="text-sm"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {item.description}
            </p>
            <div data-aos="fade-up" data-aos-once="true" data-aos-duration="500" data-aos-delay="300">
              <button className=" bg-gradient-to-r from-purple-800 to-purple-600 text-white px-4 py-2 rounded hover:scale-105 transition duration-300 mt-2">
                Shop Now
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="order-1 sm:order-2 flex justify-center items-center p-4 sm:p-8 ">
            <div
              className=" relative z-10"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto rounded-md"
              />
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={prevSlide}
            className="px-3 py-1 bg-purple-600 text-white rounded-l-lg hover:bg-purple-800 transition focus:ring-2 focus:ring-purple-900 w-[60px]"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-3 py-1 bg-purple-600 text-white rounded-r-lg   hover:bg-purple-800 transition focus:ring-2 focus:ring-purple-900 w-[60px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
