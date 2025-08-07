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
      <div className="px-6 py-12 mx-auto max-w-7xl text-gray-800 space-y-8">
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Homepage
        </Link>
        <h1 className="text-4xl font-semibold text-green-700">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600">Last updated: August 7, 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Direct Input:</strong> Name, email, phone, and messages
              submitted via forms.
            </li>
            <li>
              <strong>Analytics:</strong> Browser/device data, pages visited
              (via cookies).
            </li>
            <li>
              <strong>Third-Parties:</strong> Email, payment, or analytics
              platforms may collect necessary data.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to enquiries and communication.</li>
            <li>Sending newsletters and promotional content (if opted in).</li>
            <li>Security checks and compliance with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            3. Sharing Personal Information
          </h2>
          <p>
            We may share data with service providers, legal authorities, or
            during business transfers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            4. Your Rights
          </h2>
          <p>
            You may request data access, corrections, deletion, or opt-out of
            marketing communications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            5. Security & Retention
          </h2>
          <p>
            We use reasonable protections, but no system is 100% secure. Data is
            retained based on legal/business needs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            6. Children’s Privacy
          </h2>
          <p>We do not knowingly collect information from children under 16.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            7. Policy Updates
          </h2>
          <p>
            This policy may be updated at any time. Please review periodically
            for any changes.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
