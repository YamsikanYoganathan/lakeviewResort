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
      "A two bedroom cottage for up to 4 people, consisting of 2 double beds, 3 piece bathroom, separate dining area and a fireplace in the living room.",
    image: cottage1,
    link: "/cottages/lakeview",
  },
  {
    title: "Cottage 2",
    description:
      "A three bedroom cottage for up to six people, with one queen-size bed, one double bed, a set of upper and lower bunks, 4 pc. bath with small bathtub, and a fireplace in the combination living/dining area.  Electric heat.",
    image: cottage2,
    link: "/cottages/forest",
  },
  {
    title: "Cottage 3",
    description:
      "A three bedroom cottage for up to 6 people consisting of one queen size bed, one double bed and a set of full twin upper and lower bunks. It has a three piece bathroom and a combination kitchen/dining/living area including a woodstove and electric heat.",
    image: cottage3,
    link: "/cottages/family",
  },
  {
    title: "Cottage 4",
    description:
      "A three bedroom cottage for up to 6 people consisting of one queen size bed and two double beds, a three piece bathroom and a combination living/dining/kitchen area, complete with woodstove.",
    image: cottage4,
    link: "/cottages/luxury",
  },
  {
    title: "Cottage 5",
    description:
      "A two bedroom cottage for up to 4 people with a double bed and a set of full twin upper and lower bunk beds, three piece bathroom and a combination living/dining/kitchen area, complete with woodstove.",
    image: cottage5,
    link: "/cottages/romantic",
  },
  {
    title: "Cottage 6",
    description:
      "A one bedroom cottage for 2 people with queen size bed, three piece bathroom, kitchen and combination dining/sitting area, with electric heat.",
    image: cottage6,
    link: "/cottages/adventure",
  },
  {
    title: "Cottage 7",
    description:
      "A 4 bedroom cottage for up to 8 people, with two double beds and 2 sets of full twin upper and lower bunks, three piece bathroom, kitchen/dining area and a large living room with woodstove.",
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
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={cottage.image}
            alt={cottage.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col pt-44 sm:pt-72 items-center text-center px-4 ">
            <h1 className="text-white text-5xl md:text-7xl uppercase tracking-tight font-bold mb-6 drop-shadow-lg">
              {cottage.title}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-xl mb-12 drop-shadow-md">
              {cottage.description}
            </p>
            <div className="flex justify-center items-center space-x-6">
              <EnquiryButton />
              <Link
                to="/cottages"
                className="bg-white text-gray-900 sm:px-4 px-8 sm:py-2 py-2.5 rounded-md text-md sm:text-sm font-medium hover:bg-gray-200 transition"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 w-full flex justify-center space-x-2 sm:pb-16 pb-20">
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
