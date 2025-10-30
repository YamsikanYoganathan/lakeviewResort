import React, { useState, useEffect, useRef } from "react";
import EnquiryButton from "./EnquiryButton";
import { Link } from "react-router-dom";

export default function CTASection() {
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
    <div className="bg-white py-20 sm:py-28">
      {/* Main content container with fade-in and slide-up transition */}
      <div 
        className={`mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8 ${baseTransition} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } duration-600`}
        ref={sectionRef}
      >
        <h2 className=" text-green-900 text-4xl font-semibold tracking-tight sm:text-5xl">
          Ready to plan your perfect cottage getaway?
        </h2>
        <p className="mt-4 text-lg text-green-800">
          Discover the peaceful beauty of Lakeview Resort. Book your stay now
          and experience relaxation, adventure, and nature all in one place.
        </p>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <EnquiryButton />
          <Link
            to="/cottages"
            className="bg-white text-gray-900 sm:px-4 px-8 sm:py-2 py-2.5 rounded-md text-md sm:text-sm font-medium hover:bg-gray-200 transition outline-2 outline-gray-100"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}