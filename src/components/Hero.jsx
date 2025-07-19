import React, { useState, useEffect } from "react";
import EnquiryButton from "./EnquiryButton";
import { Link } from "react-router-dom";
import cottage1 from "../assets/cottage1.jpg";
import cottage2 from "../assets/cottage2.jpg";
import cottage3 from "../assets/cottage3.jpg";
import cottage4 from "../assets/cottage4.jpg";
import cottage5 from "../assets/cottage5.jpg";
import cottage6 from "../assets/cottage6.jpg";
import cottage7 from "../assets/cottage7.jpg";

const cottages = [
  {
    title: "Cottage 1",
    description:
      "A 2 bedroom cottage for up to 4 people, consisting of 2 double beds, 3 piece bathroom, separate dining area and a fireplace in the living room.",
    image: cottage1,
    link: "/cottages/lakeview",
  },
  {
    title: "Cottage 2",
    description:
      "A 3 bedroom cottage for up to six people, with 1 queen-size bed, 1 double bed, a set of upper and lower bunks, 4 pc. bath with small bathtub, and a fireplace in the combination living/dining area. Electric heat.",
    image: cottage2,
    link: "/cottages/forest",
  },
  {
    title: "Cottage 3",
    description:
      "A 3 bedroom cottage for up to 6 people consisting of 1 queen size bed, 1 double bed and a set of full twin upper and lower bunks. It has a 3 piece bathroom and a combination kitchen/dining/living area including a woodstove and electric heat.",
    image: cottage3,
    link: "/cottages/family",
  },
  {
    title: "Cottage 4",
    description:
      "A 3 bedroom cottage for up to 6 people consisting of 1 queen size bed and 2 double beds, a 3 piece bathroom and a combination living/dining/kitchen area, complete with woodstove.",
    image: cottage4,
    link: "/cottages/luxury",
  },
  {
    title: "Cottage 5",
    description:
      "A 2 bedroom cottage for up to 4 people with a double bed and a set of full twin upper and lower bunk beds, 3 piece bathroom and a combination living/dining/kitchen area, complete with woodstove.",
    image: cottage5,
    link: "/cottages/romantic",
  },
  {
    title: "Cottage 6",
    description:
      "A 1 bedroom cottage for 2 people with queen size bed, 3 piece bathroom, kitchen and combination dining/sitting area, with electric heat.",
    image: cottage6,
    link: "/cottages/adventure",
  },
  {
    title: "Cottage 7",
    description:
      "A 4 bedroom cottage for up to 8 people, with 2 double beds and 2 sets of full twin upper and lower bunks, 3 piece bathroom, kitchen/dining area and a large living room with woodstove.",
    image: cottage7,
    link: "/cottages/hillside",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cottages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {cottages.map((cottage, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1000ms] ease-in-out transform ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          <img
            src={cottage.image}
            alt={cottage.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col pt-44 sm:pt-72 items-center text-center px-4">
            <h1
              className="bg-gradient-to-br from-yellow-200 via-green-500 to-yellow-200 bg-clip-text text-transparent text-5xl md:text-8xl uppercase tracking-widest font-medium mb-6 drop-shadow-lg"
            >
              {cottage.title}
            </h1>
            <p className="text-white text-md md:text-xl max-w-2xl mb-12 drop-shadow-md">
              {cottage.description}
            </p>
            <div className="flex justify-center items-center space-x-6">
              <EnquiryButton className="md:px-8 md:py-3 px-5 py-2 text-md" />
              <Link
                to="/cottages"
                className="bg-white text-green-700 px-10 sm:px-8 sm:py-3 py-2.5 rounded-md text-sm font-medium hover:bg-gray-300 transition"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute z-100 bottom-6 w-full flex justify-center space-x-2 sm:pb-16 pb-20">
        {cottages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-50/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
