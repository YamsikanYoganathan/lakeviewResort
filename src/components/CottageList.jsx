import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cottagesData } from "../data/cottagesData ";
import { FaUsers, FaBed } from "react-icons/fa";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default function CottageList() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const baseTransition = "transition-all duration-1200 ease-out transform";

  return (
    <div className="bg-white mt-8" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        
        <div
          className={`${baseTransition} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } duration-800`}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-center sm:text-5xl">
            Our Cottages
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-xl mx-auto">
            Discover our fully equipped, modern self-catered cottages designed for
            comfort and relaxation.
          </p>
        </div>

        {/* Cottage Grid - Staggered Slide-up and Fade-in */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cottagesData.map((cottage, index) => (
            <Link
              key={cottage.id}
              to={cottage.href}
              className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-400 hover:scale-[1.03] ${baseTransition} ${
                isVisible
                  ? `opacity-100 translate-y-0 delay-[${400 + index * 240}ms]`
                  : "opacity-0 translate-y-12"
              }`}
            >
              <img
                src={cottage.imageSrc}
                loading="lazy"
                alt={cottage.imageAlt}
                className="w-full h-68 object-cover object-center transform group-hover:scale-105 transition-transform duration-400 saturate-120"
              />

              {/* Bottom 40% gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/80 via-black/60 to-transparent px-5 py-4 flex flex-col justify-end ">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {cottage.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-200 gap-4">
                      <div className="flex items-center gap-1">
                        <FaUsers className="text-white" />
                        <span>{cottage.details.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBed className="text-white" />
                        <span>{cottage.details.beds} Beds</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center text-sm text-white font-medium hover:text-green-400 transition-colors duration-400">
                      Full Info
                      <ArrowDownRightIcon className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}