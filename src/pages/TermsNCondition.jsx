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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Homepage
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-8">
          Terms &amp; Conditions
        </h1>

        <section className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Check‑In / Check‑Out
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Check-In after 3:00 PM with photo ID and deposit.</li>
              <li>Check-Out before 11:00 AM. Late fees apply after 3:00 PM.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Payment & Deposits
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>50% deposit required to confirm booking.</li>
              <li>$150 CAD pre-authorization at check-in for damages.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Cancellation Policy
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Free cancellation up to 2 days before check-in (15 days for peak
                season).
              </li>
              <li>No-shows lose deposit; no additional charges apply.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Smoking & Fire Policy
            </h2>
            <p>
              No candles, incense, or smoking indoors. Fees may apply for
              violations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Pets</h2>
            <p>
              Allowed with $20 CAD fee per night. Must be supervised and waste
              cleaned.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. House Rules & Conduct
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Quiet hours: 12 AM – 7 AM.</li>
              <li>
                No visitors after 10 PM. Management reserves right to refuse
                service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Force Majeure</h2>
            <p>
              We are not liable for cancellations due to natural disasters or
              other events beyond control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Amenity Use</h2>
            <p>
              Use kayaks, canoes, and water access at your own risk. Safety
              rules apply.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
