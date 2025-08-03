import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <Breadcrumb current="Terms & Conditions" />
      <div className="mt-6 px-6 py-12 max-w-4xl mx-auto text-gray-800 space-y-6">
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Homepage
        </Link>
        <h1 className="text-3xl font-semibold text-green-700">
          Terms & Conditions
        </h1>
        <p>
          By using this website and booking with Lakeview Resort, you agree to
          the following terms:
        </p>

        <h2 className="text-xl font-semibold">1. Booking & Payment</h2>
        <p>
          Reservations are confirmed only upon payment. All rates are subject to
          change without notice.
        </p>

        <h2 className="text-xl font-semibold">2. Cancellation Policy</h2>
        <p>
          Cancellations must be made at least 7 days before check-in for a full
          refund.
        </p>

        <h2 className="text-xl font-semibold">3. Use of Property</h2>
        <p>
          Guests must respect the property, follow safety rules, and avoid
          damage. Violations may result in additional charges.
        </p>

        <h2 className="text-xl font-semibold">4. Liability</h2>
        <p>
          Lakeview Resort is not liable for personal injury, loss, or damage
          during your stay.
        </p>

        <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of our site means acceptance of these terms.
        </p>
      </div>
      <Footer />
    </>
  );
}
