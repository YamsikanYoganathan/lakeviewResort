import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaBed,
  FaBath,
  FaUserFriends,
  FaCouch,
  FaWifi,
  FaWater,
  FaCheck  
} from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { MdFireplace} from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { cottagesData } from "../data/cottagesData ";

export default function CottagePage() {
  const { id } = useParams();
  const cottage = cottagesData.find((c) => c.id === id);
  const [mainImage, setMainImage] = useState(cottage?.images[0]);
  const [showGallery, setShowGallery] = useState(false);

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



  const topImages = cottage.images.slice(0, 5);
  const remainingImages = cottage.images.slice(5);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative">
        <Link
          to="/cottages"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to cottages
        </Link>

        {/* Image Layout */}
        {!showGallery ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={topImages[0]}
                alt="Main View"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {topImages.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt={`View ${idx + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-3 right-4 bg-white text-gray-800 text-sm px-4 py-1 rounded shadow hover:bg-gray-200"
            >
              Show all photos
            </button>
          </div>
        ) : (
          <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-scroll">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Photo Gallery</h2>
              <button
                onClick={() => setShowGallery(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cottage.images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Title, Description, and Details aligned */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-6">
          <div className="lg:w-2/3">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {cottage.title}
            </h1>
            <p className="text-lg max-w-2xl text-gray-700 mb-2">
              {cottage.description}
            </p>
            {cottage.specialNote && (
              <p className="text-green-700 font-semibold mb-4">
                {cottage.specialNote}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:w-1/3">
            <DetailCard
              icon={<FaBed size={24} className="text-green-600 mx-auto" />}
              label="Bedrooms"
              value={cottage.details.bedrooms}
            />
            <DetailCard
              icon={<FaBath size={24} className="text-green-600 mx-auto" />}
              label="Bathrooms"
              value={cottage.details.bathrooms}
            />
            <DetailCard
              icon={<IoBed size={24} className="text-green-600 mx-auto" />}
              label="Beds"
              value={cottage.details.beds}
            />
            <DetailCard
              icon={
                <FaUserFriends size={24} className="text-green-600 mx-auto" />
              }
              label="Guests"
              value={cottage.details.guests}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cottage.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg"
              >
                {getFeatureIcon(feature)}
                <span className="ml-3 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {cottage.otherDetails && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Other Details</h2>
            <p className="text-gray-700">{cottage.otherDetails}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center flex flex-col items-center">
      {icon}
      <p className="text-lg font-semibold mt-2">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

  const featureIcons = {
    "wifi": FaWifi,
    "Private deck with BBQ":FaCheck ,
    "fully equipped kitchen": TbToolsKitchen2,
    "fireplace": MdFireplace,
    "lake access": FaWater,
    "Parking": FaCheck   
  };

function getFeatureIcon(feature) {
  const Icon = featureIcons[feature.toLowerCase()] || FaCheck;
  return <Icon size={20} className="text-green-600" />;
}
