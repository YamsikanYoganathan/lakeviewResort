import React, { useEffect, useState } from "react";
import cottageHero from "../assets/hero-img.webp";
import EnquiryButton from "./EnquiryButton";
import { Link } from "react-router-dom";

export default function Hero() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "transition-all duration-1000 ease-out transform";

  return (
    <div className="relative w-full h-screen">
      <img
        src={cottageHero}
        alt="Cottage"
        className={`absolute inset-0 w-full h-full object-cover object-center ${
          contentVisible ? "opacity-100 transition-opacity duration-[1800ms]" : "opacity-0 transition-opacity duration-[1800ms]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

      <div className="relative mx-auto max-w-7xl z-10 flex items-center justify-start h-full px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl">
          <h1
            className={`${baseTransition} ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg uppercase`}
          >
            Discover Your Perfect
            <br /> Lakeview Cottage <br /> Retreat
          </h1>
          
          <p
            className={`${baseTransition} ${
              contentVisible
                ? "opacity-100 translate-y-0 delay-[400ms]"
                : "opacity-0 translate-y-8"
            } text-lg sm:text-2xl xl:text-2xl mt-2 font-semibold text-white/70 leading-tight lg:max-w-2xl sm:max-w-lg max-w-md`}
          >
            Discover an exclusive collection of private cottages where nature's
            beauty meets comfort.
          </p>

          <div
            className={`${baseTransition} ${
              contentVisible
                ? "opacity-100 translate-y-0 delay-[800ms]"
                : "opacity-0 translate-y-8"
            } flex flex-wrap justify-start gap-3 mt-8 text-sm sm:text-base`}
          >
            <EnquiryButton className="bg-white/20 backdrop-blur-md text-white font-medium rounded-full" />
            <Link
              to={"/cottages"}
              className="sm:px-8 sm:py-2.5 px-8 py-2.5 text-sm sm:text-md font-medium hover:bg-green-900 transition rounded-lg bg-white/20 backdrop-blur-md text-white"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${baseTransition} ${
          contentVisible ? "opacity-100 delay-[1000ms]" : "opacity-0"
        } mx-auto max-w-7xl absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8`}
      >
        <div className="flex flex-wrap justify-start gap-8 text-white/90 text-sm sm:text-base font-medium">
          <div>
            <p className="uppercase tracking-wide text-xs sm:text-sm opacity-70">
              Property Type
            </p>
            <p className="font-semibold">Cottage</p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-xs sm:text-sm opacity-70">
              No. of cottages
            </p>
            <p className="font-semibold">08</p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-xs sm:text-sm opacity-70">
              Availability
            </p>
            <p className="font-semibold">For Rent</p>
          </div>
        </div>
      </div>
    </div>
  );
}