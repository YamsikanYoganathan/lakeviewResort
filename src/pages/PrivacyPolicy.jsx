import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Breadcrumb current="Privacy Policy" />
      <div className="mt-6 px-6 py-12 max-w-4xl mx-auto text-gray-800 space-y-6">
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Homepage
        </Link>
        <h1 className="text-3xl font-semibold text-green-700">Privacy Policy</h1>
        <p>
          Lakeview Resort values your privacy. This policy outlines how we
          collect, use, and protect your personal information.
        </p>
        <h2 className="text-xl font-semibold">1. Data Collection</h2>
        <p>
          We collect data such as your name, email, and booking details when you
          make a reservation or contact us.
        </p>

        <h2 className="text-xl font-semibold">2. Usage of Data</h2>
        <p>
          Your information is used only to improve our services, process
          bookings, and communicate with you about your stay.
        </p>

        <h2 className="text-xl font-semibold">3. Cookies</h2>
        <p>
          Our website uses cookies to enhance user experience. You can disable
          cookies in your browser settings.
        </p>

        <h2 className="text-xl font-semibold">4. Security</h2>
        <p>
          We use industry-standard practices to safeguard your data and ensure
          your privacy is respected.
        </p>

        <h2 className="text-xl font-semibold">5. Contact Us</h2>
        <p>
          For privacy-related questions, contact us at info@lakeviewresort.ca
        </p>
      </div>
      <Footer />
    </>
  );
}
