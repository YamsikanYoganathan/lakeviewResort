import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FaBed, FaBath, FaUserFriends, FaCouch, FaWifi, FaUtensils, FaTv, FaParking } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import { cottagesData } from "../data/cottagesData ";

export default function CottagePage() {
  const { id } = useParams();
  const cottage = cottagesData.find((c) => c.id === id);
  const [mainImage, setMainImage] = useState(cottage?.images[0]);

  if (!cottage) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Cottage not found</h2>
        <Link to="/cottages" className="text-green-600 underline">Back to Cottages</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/cottages" className="flex items-center text-green-600 hover:text-green-800 mb-6">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to cottages
        </Link>

        {/* Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Main Image */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg">
              <img
                src={mainImage}
                alt="Main cottage view"
                className="w-full h-full lg:min-w-3xl max-h-[624px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto">
            {cottage.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={`lg:w-36 md:w-44 w-24 object-cover rounded-lg cursor-pointer border-2 transition-transform duration-200 hover:scale-105 ${mainImage === img ? "border-green-500" : "border-transparent"}`}
              />
            ))}
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{cottage.title}</h1>
        <p className="text-lg text-gray-700 mb-2">{cottage.description}</p>
        {cottage.specialNote && (
          <p className="text-green-700 font-semibold mb-6">{cottage.specialNote}</p>
        )}

        {/* Details Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <DetailCard icon={<FaBed size={24} className="text-green-600 mx-auto" />} label="Bedrooms" value={cottage.details.bedrooms} />
          <DetailCard icon={<FaBath size={24} className="text-green-600 mx-auto" />} label="Bathrooms" value={cottage.details.bathrooms} />
          <DetailCard icon={<IoBed  size={24} className="text-green-600 mx-auto" />} label="Beds" value={cottage.details.beds} />
          <DetailCard icon={<FaUserFriends size={24} className="text-green-600 mx-auto" />} label="Guests" value={cottage.details.guests} />
        </div>

        {/* Features Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cottage.features.map((feature, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                {getFeatureIcon(feature)}
                <span className="ml-3 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Details */}
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

function getFeatureIcon(feature) {
  const iconProps = { size: 20, className: "text-green-600" };
  switch (feature.toLowerCase()) {
    case "wifi":
      return <FaWifi {...iconProps} />;
    case "kitchen":
      return <TbToolsKitchen2  {...iconProps} />;
    case "tv":
      return <FaTv {...iconProps} />;
    case "parking":
      return <FaParking {...iconProps} />;
    default:
      return <FaCouch {...iconProps} />;
  }
}
