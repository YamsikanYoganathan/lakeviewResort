import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaBed,
  FaBath,
  FaUserFriends,
  FaWifi,
  FaWater,
  FaCheck,
} from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { MdFireplace } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { cottagesData } from "../data/cottagesData ";

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
  wifi: FaWifi,
  "private deck with bbq": FaCheck,
  "fully equipped kitchen": TbToolsKitchen2,
  fireplace: MdFireplace,
  "lake access": FaWater,
  parking: FaCheck,
};

function getFeatureIcon(feature) {
  const Icon = featureIcons[feature.toLowerCase()] || FaCheck;
  return <Icon size={20} className="text-green-600" />;
}

export default function CottagePage() {
  const { id } = useParams();
  const cottage = cottagesData.find((c) => c.id === id);
  const [mainImage, setMainImage] = useState(cottage?.images[0]);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [priceTab, setPriceTab] = useState("day");

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

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative mt-16">
        <Link
          to="/cottages"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to cottages
        </Link>

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
          <div className="fixed top-0 left-0 right-0 bg-white z-50 overflow-y-scroll h-full py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white py-4 px-4 z-50 mx-auto max-w-7xl">
                <h2 className="text-2xl font-semibold">Cottages Gallery</h2>
                <button
                  onClick={() => setShowGallery(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
                {cottage.images.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-tranperency backdrop-blur-xl backdrop-brightness-50 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-6">
          <div className="lg:w-3/4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {cottage.title}
            </h1>
            <p className="text-lg max-w-4xl text-gray-700 mb-2">
              {cottage.description}
            </p>
            {cottage.specialNote && (
              <p className="text-green-700 font-semibold mb-4">
                {cottage.specialNote}
              </p>
            )}
          </div>

          <div className="lg:w-1/4 rounded-lg overflow-hidden outline-2 outline-green-200">
            <div className="bg-green-50 p-6 rounded-lg ">
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setPriceTab("day")}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                    priceTab === "day"
                      ? "bg-green-600 text-white"
                      : "bg-white border border-green-600 text-green-600"
                  }`}
                >
                  Day
                </button>
                <button
                  onClick={() => setPriceTab("week")}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                    priceTab === "week"
                      ? "bg-green-600 text-white"
                      : "bg-white border border-green-600 text-green-600"
                  }`}
                >
                  Week
                </button>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="text-4xl font-bold text-green-800">
                  $
                  {priceTab === "week"
                    ? cottage.cottagePrice.perWeek
                    : cottage.cottagePrice.perDay}
                </div>
                <div className="text-sm text-gray-700 mt-2">
                  {priceTab === "week" ? "/ Per Week" : "/ Per Day"}
                </div>
              </div>

              <div className="text-sm text-green-600 mt-2.5">
                Extra Person: $
                {priceTab === "week"
                  ? cottage.cottagePrice.extraPersonWeek
                  : cottage.cottagePrice.extraPersonDay}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

        <div className="mt-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Extra Activities</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="bg-gray-50 p-6 rounded-lg outline-2 outline-gray-100">
              <h4 className="font-semibold text-green-700 mb-3 text-lg">
                Boat & Motor
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Per Hour</span>
                  <span>${cottage.extraFunPrice.BoatNMotorPerHour}</span>
                </li>
                <li className="flex justify-between">
                  <span>Per Day</span>
                  <span>${cottage.extraFunPrice.BoatNMotorPerDay}</span>
                </li>
                <li className="flex justify-between">
                  <span>Per Week</span>
                  <span>${cottage.extraFunPrice.BoatNMotorPerWeek}</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg outline-2 outline-gray-100">
              <h4 className="font-semibold text-green-700 mb-3 text-lg">
                Canoe
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Per Hour</span>
                  <span>${cottage.extraFunPrice.canoePerHour}</span>
                </li>
                <li className="flex justify-between">
                  <span>Per Day</span>
                  <span>${cottage.extraFunPrice.canoePerDay}</span>
                </li>
                <li className="flex justify-between">
                  <span>Per Week</span>
                  <span>${cottage.extraFunPrice.canoePerWeek}</span>
                </li>
              </ul>
            </div>
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
