import React from "react";
import EnquiryButton from "./EnquiryButton";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
        <h2 className=" text-green-900 text-4xl font-bold tracking-tight sm:text-5xl">
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
