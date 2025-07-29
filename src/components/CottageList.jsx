import React from "react";
import { Link } from "react-router-dom";
import cottage1 from "../assets/cottage-1-exterior.webp";
import cottage2 from "../assets/cottage-2-exterior.webp";
import cottage3 from "../assets/cottage-3-exterior.webp";
import cottage4 from "../assets/cottage-4-exterior.webp";
import cottage5 from "../assets/cottage-5-exterior.webp";
import cottage6 from "../assets/cottage-6-exterior.webp";
import cottage7 from "../assets/cottage-7-exterior.webp";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

const cottages = [
  {
    id: 1,
    name: "Cottage 1",
    href: "/cottages/cottage-1",
    imageSrc: cottage1,
    imageAlt: "Lakeview Cottage exterior with lake view.",
    description: "Cozy lakefront stay with beautiful sunrise views.",
  },
  {
    id: 2,
    name: "Cottage 2",
    href: "/cottages/cottage-2",
    imageSrc: cottage2,
    imageAlt: "Forest Retreat nestled in trees.",
    description: "Peaceful forest cottage surrounded by nature.",
  },
  {
    id: 3,
    name: "Cottage 3",
    href: "/cottages/cottage-3",
    imageSrc: cottage3,
    imageAlt: "Family Cottage with spacious yard.",
    description: "Spacious accommodation perfect for families.",
  },
  {
    id: 4,
    name: "Cottage 4",
    href: "/cottages/cottage-4",
    imageSrc: cottage4,
    imageAlt: "Luxury Cottage with premium design.",
    description: "Premium amenities and comfort for your stay.",
  },
  {
    id: 5,
    name: "Cottage 5",
    href: "/cottages/cottage-5",
    imageSrc: cottage5,
    imageAlt: "Romantic Cabin for couples.",
    description: "Perfect getaway for couples by the lake.",
  },
  {
    id: 6,
    name: "Cottage 6",
    href: "/cottages/cottage-6",
    imageSrc: cottage6,
    imageAlt: "Adventure Cabin for nature lovers.",
    description: "For those seeking a bit of adventure.",
  },
  {
    id: 7,
    name: "Cottage 7",
    href: "/cottages/cottage-7",
    imageSrc: cottage7,
    imageAlt: "Hillside Cottage with panoramic views.",
    description: "Stay on the hillside with panoramic views.",
  },
];

export default function CottageList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-5xl">
          Our Cottages
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-xl mx-auto">
          Discover our fully equipped, modern self-catered cottages designed for
          comfort and relaxation.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cottages.map((cottage) => (
            <Link
              key={cottage.id}
              to={cottage.href}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cottage.imageSrc}
                alt={cottage.imageAlt}
                className="w-full h-68 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/45 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center justify-start">
                  <ArrowDownRightIcon className="h-5 w-5 text-gray-50 mr-3" />
                  <h3 className="text-white text-2xl font-semibold">
                    {cottage.name}
                  </h3>
                </div>
                {/* <p className="text-sm text-gray-200 mt-1">
                  {cottage.description}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
