import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { cottagesData } from "../data/cottagesData ";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CottagePage() {
  const { cottageId } = useParams();
  const cottage = cottagesData.find((c) => c.id === cottageId);

  if (!cottage) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Cottage not found</h2>
        <Link to="/cottages" className="text-green-600 underline">
          Back to Cottages
        </Link>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <Link
        to="/cottages"
        className="flex items-center text-green-600 hover:text-green-800 mb-4"
    >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to cottages
    </Link>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-8">
        {cottage.images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt={`${cottage.title} image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-sm"
        />
        ))}
    </div>

    {/* Title & Description */}
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {cottage.title}
    </h1>
    <p className="text-lg text-gray-700 mb-2">{cottage.description}</p>
    <p className="text-green-700 font-semibold mb-6">
        {cottage.specialNote}
    </p>

    {/* Details */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-2xl font-bold">{cottage.details.bedrooms}</p>
        <p className="text-sm text-gray-500">Bedrooms</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-2xl font-bold">{cottage.details.bathrooms}</p>
        <p className="text-sm text-gray-500">Bathrooms</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-2xl font-bold">{cottage.details.beds}</p>
        <p className="text-sm text-gray-500">Beds</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
        <p className="text-2xl font-bold">{cottage.details.guests}</p>
        <p className="text-sm text-gray-500">Guests</p>
        </div>
    </div>

    {/* Features */}
    <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {cottage.features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
        </ul>
    </div>

    {/* Other Details */}
    <div>
        <h2 className="text-2xl font-semibold mb-3">Other Details</h2>
        <p className="text-gray-700">{cottage.otherDetails}</p>
    </div>
    </div>
    <Footer />
    </>
  );
}
