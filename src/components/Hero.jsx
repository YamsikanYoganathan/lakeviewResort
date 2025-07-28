import React, { useState, useEffect } from "react";
import EnquiryButton from "./EnquiryButton";
import { Link } from "react-router-dom";
import cottage1 from "../assets/cottage-1-exterior.webp";
import cottage2 from "../assets/cottage-2-exterior.webp";
import cottage3 from "../assets/cottage-3-exterior.webp";
import cottage4 from "../assets/cottage-4-exterior.webp";
import cottage5 from "../assets/cottage-5-exterior.webp";
import cottage6 from "../assets/cottage-6-exterior.webp";
import cottage7 from "../assets/cottage-7-exterior.webp";

const cottages = [
  {
    title: "Cottage 1",
    description: "2 Bedroom | Up to 4 People | 3 Piece Bathroom",
    image: cottage1,
    link: "/cottages/lakeview",
  },
  {
    title: "Cottage 2",
    description: "3 Bedroom | Up to 6 People | 4 Piece Bathroom",
    image: cottage2,
    link: "/cottages/forest",
  },
  {
    title: "Cottage 3",
    description: "3 Bedroom | Up to 6 People | 3 Piece Bathroom ",
    image: cottage3,
    link: "/cottages/family",
  },
  {
    title: "Cottage 4",
    description: "3 Bedroom | Up to 6 People | 3 Piece Bathroom",
    image: cottage4,
    link: "/cottages/luxury",
  },
  {
    title: "Cottage 5",
    description: "2 Bedroom | Up to 4 People | 3 Piece Bathroom",
    image: cottage5,
    link: "/cottages/romantic",
  },
  {
    title: "Cottage 6",
    description: "1 Bedroom cottage | For 2 People | 3 Piece Bathroom",
    image: cottage6,
    link: "/cottages/adventure",
  },
  {
    title: "Cottage 7",
    description: "4 Bedroom | up to 8 people | 3 Piece Bathroom",
    image: cottage7,
    link: "/cottages/hillside",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cottages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {cottages.map((cottage, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === current
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          <img
            src={cottage.image}
            alt={cottage.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-950/60 to-black/80 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl sm:text-8xl  xl:text-[8rem] font-extrabold pb-5 tracking-wide bg-gradient-to-br from-lime-300 via-green-400 to-emerald-600 bg-clip-text text-transparent font-[Sarina] drop-shadow-lg mb-8 animate-fadeIn">
              {cottage.title}
            </h1>
            <p className="text-white text-base sm:text-xl lg:text-2xl max-w-2xl mb-10 leading-relaxed tracking-wide drop-shadow-md animate-fadeIn delay-200">
              {cottage.description}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 animate-fadeIn delay-300">
              <EnquiryButton className="px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-lg font-medium" />
              <Link
                to={cottage.link}
                className="px-6 py-2.5 sm:px-8 sm:py-2.5 text-sm sm:text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-black transition rounded-lg"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center space-x-2 z-30">
        {cottages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
