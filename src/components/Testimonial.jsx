import React, { useState, useEffect, useRef } from "react";
import Person1 from "../assets/Person/person1.jpg";
import Person2 from "../assets/Person/person2.jpg";
import Person3 from "../assets/Person/person3.jpg";
import Person4 from "../assets/Person/person4.jpg";
import Person5 from "../assets/Person/person5.jpg";
import { FaStar } from "react-icons/fa6";

const TestimonialData = [
  {
    id: 1,
    name: "Jennifer Lee",
    comment: "Great service and amazing products! Highly recommend.",
    rating: 5,
    img: Person1,
  },
  {
    id: 2,
    name: "David Smith",
    comment: "I love the quality of the items I purchased. Will shop again!",
    rating: 4.5,
    img: Person2,
  },
  {
    id: 3,
    name: "Mo Hassan",
    comment: "Fast delivery and excellent customer support.",
    rating: 5,
    img: Person3,
  },
  {
    id: 4,
    name: "Dana Al-Sabah",
    comment: "The best online shopping experience I've ever had!",
    rating: 5,
    img: Person4,
  },
  {
    id: 5,
    name: "Omar Borkan",
    comment: "Wide range of products at great prices. Very satisfied!",
    rating: 4.8,
    img: Person5,
  },
];

const VISIBLE_COUNT = 3;
const SLIDE_INTERVAL = 3000; // ms

const Testimonial = () => {
  const [groupIndex, setGroupIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Calculate number of groups (ceil for last group if not divisible)
  const groupCount = Math.ceil(TestimonialData.length / VISIBLE_COUNT);

  // Auto-slide effect
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setGroupIndex((prev) => (prev + 1) % groupCount);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [groupIndex, groupCount]);

  // Get the testimonials for the current group
  const start = groupIndex * VISIBLE_COUNT;
  let visibleTestimonials = TestimonialData.slice(start, start + VISIBLE_COUNT);

  // If last group is not full, you can wrap around or leave empty slots
  if (visibleTestimonials.length < VISIBLE_COUNT) {
    visibleTestimonials = [
      ...visibleTestimonials,
      ...TestimonialData.slice(0, VISIBLE_COUNT - visibleTestimonials.length),
    ];
  }

  // Dot navigation
  const handleDotClick = (idx) => setGroupIndex(idx);

  return (
    <div className="py-10">
      <div>
        {/* Header Section */}
        <p className="text-sm text-center text-purple-700 mt-2">
          What our customers say about us
        </p>
        <h2 className="text-2xl font-bold text-center">Testimonials</h2>
        <p className="text-sm text-center text-gray-500 mt-2 max-w-[600px] mx-auto">
          We value our customers' feedback and strive to provide the best
          service possible. Here's what some of our satisfied customers have to
          say about their experiences with us.
        </p>
        {/* Testimonial Comment Section */}
        <div className="w-full flex justify-center items-center mt-12">
          <div className="relative w-[1140px] overflow-x-hidden">
            <div
              className="flex gap-6 transition-transform duration-[1200ms] ease-in-out"
              style={{
                transform: `translateX(-${groupIndex * 1140}px)`,
                width: `${groupCount * 1140}px`,
              }}
            >
              {Array.from({ length: groupCount }).map((_, groupIdx) => {
                const groupStart = groupIdx * VISIBLE_COUNT;
                let groupTestimonials = TestimonialData.slice(
                  groupStart,
                  groupStart + VISIBLE_COUNT
                );
                if (groupTestimonials.length < VISIBLE_COUNT) {
                  groupTestimonials = [
                    ...groupTestimonials,
                    ...TestimonialData.slice(
                      0,
                      VISIBLE_COUNT - groupTestimonials.length
                    ),
                  ];
                }
                return (
                  <div
                    key={groupIdx}
                    className="flex gap-6 w-[1140px] justify-center flex-shrink-0"
                  >
                    {groupTestimonials.map((testimonial, idx) => (
                      <div
                        key={testimonial.id + "-" + idx}
                        className="flex flex-col w-[350px] h-[300px] gap-4 shadow-lg py-8 px-6 mx-0 rounded-xl dark:bg-gray-800 dark:text-white bg-purple-400/20 relative"
                      >
                        <div className="w-16 h-16 shadow-lg rounded-full bg-white dark:bg-gray-700 overflow-hidden mb-4 mx-auto">
                          <img
                            src={testimonial.img}
                            className="rounded-full w-full h-full object-contain"
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="flex flex-col items-center gap-4 flex-1">
                          <div className="space-y-3">
                            <h1 className="text-xl font-semibold text-black/80 dark:text-white text-center">
                              {testimonial.name}
                            </h1>
                            <p className="text-sm text-gray-500 text-center">
                              {testimonial.comment}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 justify-center">
                          {[...Array(Math.floor(testimonial.rating))].map(
                            (_, index) => (
                              <FaStar key={index} className="text-yellow-500" />
                            )
                          )}
                          {testimonial.rating % 1 !== 0 && (
                            <span className="text-yellow-500">½</span>
                          )}
                        </div>
                        <p className="flex justify-center items-center text-black/20 text-9xl font-serif absolute -top-10 right-3">
                          ...
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: groupCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                groupIndex === idx ? "bg-purple-600 scale-125" : "bg-purple-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
