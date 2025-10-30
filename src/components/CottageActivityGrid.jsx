import React, { useState, useEffect, useRef } from "react";
import lakeview from "../assets/lakeview.webp";
import boating from "../assets/boating.webp";
import hiking from "../assets/hiking.webp";
import waterfall from "../assets/waterfall.webp";
import natureview from "../assets/natureView.webp";

const activities = [
  {
    title: "Scenic Hiking Trails",
    description:
      "Wander through breathtaking trails surrounded by forest and lakeside beauty.",
    image: hiking,
    alt: "Guest hiking through trails near Lakeview Resort.",
  },
  {
    title: "Peaceful Lakeview Mornings",
    description:
      "Begin your day with tranquil lake views and calming natural surroundings.",
    image: lakeview,
    alt: "View of the lake from the Lakeview Cottage during sunrise.",
  },
  {
    title: "Refreshing Waterfall Spot",
    description:
      "Cool off near a hidden waterfall surrounded by lush greenery—perfect for photos and relaxation.",
    image: waterfall,
    alt: "Waterfall near the Lakeview Resort cottages.",
  },
  {
    title: "Nature Viewpoints & Scenic Beauty",
    description:
      "Capture panoramic views of the lush landscape and peaceful surroundings from our scenic spots.",
    image: natureview,
    alt: "Nature viewpoint with scenic landscapes at Lakeview Resort.",
  },
  {
    title: "Relaxing Boat & Fishing Rides",
    description:
      "Unwind on a boat ride or try fishing in the serene, clean lake waters.",
    image: boating,
    alt: "Guest fishing by the lake at Lakeview Resort.",
  },
];

export default function CottageActivityGrid() {
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

  const baseTransition = "transition-all duration-800 ease-out transform";

  return (
    <div className="bg-gray-50 py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Header and Subtitle - Slide-up and Fade-in */}
        <div
          className={`${baseTransition} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } duration-800`}
        >
          <h2 className="text-center text-base font-semibold text-green-600">
            Activities at Lakeview Resort
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Discover your next adventure
          </p>
        </div>

        {/* Activity Grid - Staggered Slide-up and Fade-in */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[320px] justify-center">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-shadow duration-400 hover:shadow-xl
                ${
                  index === 0
                    ? "sm:row-span-2 md:row-span-1 md:col-span-1 lg:row-span-2"
                    : ""
                }
                ${
                  index === 1
                    ? "sm:col-span-2 md:col-span-2 md:row-span-1 lg:col-span-1"
                    : ""
                } 
                ${
                  index === 2
                    ? "sm:col-span-2 md:col-span-3 md:row-span-1 lg:col-span-2"
                    : ""
                }
                ${
                  index === 3
                    ? "sm:col-span-2 md:col-span-2 md:row-span-1 lg:col-span-2"
                    : ""
                } 
                ${
                  index === 4
                    ? "sm:col-span-2 md:col-span-1 md:row-span-1 lg:col-span-1"
                    : ""
                }
                
                ${baseTransition} 
                ${
                  isVisible
                    ? `opacity-100 translate-y-0 delay-[${400 + index * 200}ms]`
                    : "opacity-0 translate-y-12"
                }
              `}
            >
              <img
                src={activity.image}
                alt={activity.alt}
                className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}