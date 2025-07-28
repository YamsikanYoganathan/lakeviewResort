import React from "react";
import lakeview from "../assets/lakeview.webp";
import boating from "../assets/boating.webp";
import hiking from "../assets/hiking.webp";
import waterfall from "../assets/waterfall.webp";
import natureview from "../assets/natureView.webp";
// import fishing from '../assets/fishing.webp';

const activities = [
  {
    title: "Hiking Trails",
    description:
      "Explore scenic hiking trails through forest and lakeside paths perfect for nature enthusiasts.",
    image: hiking,
    alt: "Guest hiking through trails near Lakeview Resort.",
  },
  {
    title: "Lake View Relaxation",
    description:
      "Enjoy peaceful mornings with sunrise views over the lake, perfect for meditation and relaxation.",
    image: lakeview,
    alt: "View of the lake from the Lakeview Cottage during sunrise.",
  },
  {
    title: "Camping & Stargazing",
    description:
      "Pitch a tent or enjoy a night under the stars with clear skies and the sounds of nature.",
    image: waterfall,
    alt: "Campfire and tents set up near the cottages at Lakeview Resort.",
  },
  {
    title: "BBQ & Family Gatherings",
    description:
      "We offer BBQ areas where you can prepare meals and enjoy family time surrounded by serene nature.",
    image: natureview,
    alt: "Family enjoying BBQ near cottages at Lakeview Resort.",
  },
  {
    title: "Fishing Adventures",
    description:
      "Bring your fishing gear and catch fresh fish from our clean, beautiful lake surrounded by nature.",
    image: boating,
    alt: "Guest fishing by the lake at Lakeview Resort.",
  },
];

export default function CottageActivityGrid() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-green-600">
          Activities at Lakeview Resort
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Discover your next adventure
        </p>

        <div
          className="
          mt-12 
          grid 
          grid-cols-1 
          gap-6 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          auto-rows-[320px] 
          justify-center 
          mx-auto
        "
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-shadow duration-300
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
              `}
            >
              <img
                src={activity.image}
                alt={activity.alt}
                className="w-full object-cover object-center h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
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
