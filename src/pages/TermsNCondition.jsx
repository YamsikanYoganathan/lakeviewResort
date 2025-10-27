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
        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Homepage
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-8">
          Terms &amp; Conditions
        </h1>

        <section className="space-y-8 text-base leading-relaxed">
          {/* 1. Check-in / Check-out */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              1. Check-In / Check-Out
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Check-In after 3:00 PM with photo ID and deposit.</li>
              <li>Check-Out before 11:00 AM. Late fees apply after 3:00 PM.</li>
            </ul>
          </div>

          {/* 2. Payment & Deposits */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              2. Payment & Deposits
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>50% deposit required to confirm booking.</li>
              <li>$300 CAD damage deposit is required at check-in.</li>
              <li>
                $150 CAD pre-authorization may also apply for incidental
                charges.
              </li>
            </ul>
          </div>

          {/* 3. Cancellation Policy */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              3. Cancellation Policy
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Free cancellation up to 15 days before check-in, with 50% deposit
                forfeited.
              </li>
              <li>No-shows lose deposit; no additional charges apply.</li>
            </ul>
          </div>

          {/* 4. Smoking & Fire Policy */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              4. Smoking & Fire Policy
            </h2>
            <p>
              No candles, incense, or smoking indoors. Fees may apply for
              violations or odor removal. Please use designated smoking areas
              outside.
            </p>
          </div>

          {/* 5. Pets */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">5. Pets</h2>
            <p>
              Allowed with $20 CAD fee per night. Must be supervised and waste
              cleaned promptly. Guests are responsible for any damage or noise
              caused by pets.
            </p>
          </div>

          {/* 6. House Rules */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              6. House Rules & Conduct
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Quiet hours: 10 PM – 7 AM.</li>
              <li>No speakers or loud music allowed at any time.</li>
              <li>
                No disturbance to neighbors — respect the peaceful environment
                of the resort.
              </li>
              <li>
                No visitors after 10 PM. Management reserves the right to refuse
                service or evict guests for disruptive behavior.
              </li>
              <li>
                Do not change or move furniture, equipment, or decor from one
                place to another. Guests will be liable to indemnify the resort
                for any losses or damages caused.
              </li>
            </ul>
          </div>

          {/* 7. Damage and Littering */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              7. Damage and Littering
            </h2>
            <p>
              Members or their guests shall be responsible for any damage to the
              suite, its contents, or common areas within the resort and shall
              pay for such damages upon departure. Guests are expected to
              refrain from littering the property, including the beach and
              outdoor common spaces. Additional cleaning fees may apply for
              littering.
            </p>
          </div>

          {/* 8. Force Majeure */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              8. Force Majeure
            </h2>
            <p>
              We are not liable for cancellations or interruptions due to
              natural disasters, government restrictions, or other events beyond
              our control.
            </p>
          </div>

          {/* 9. Amenity Use */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              9. Amenity Use
            </h2>
            <p>
              Use kayaks, canoes, boats, and water access at your own risk.
              Guests must follow all safety instructions provided. Life jackets
              are mandatory while using watercraft.
            </p>
          </div>

          {/* 10. BBQ Safety and Usage Rules */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              10. BBQ Safety and Usage Rules
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Please contact the front desk at <strong>154</strong> to page the
                authorized personnel on duty to turn on the grills.
              </li>
              <li>
                These are <strong>gas BBQ grills</strong>. Never use wood,
                charcoal, gasoline, or kerosene to start a fire.
              </li>
              <li>
                Usage of these facilities is at your own risk. The resort,
                owners, and staff are not responsible for any accidents or
                injuries.
              </li>
              <li>
                Please clean the grills and surrounding area after each use.
              </li>
              <li>
                Only use cleaning products and utensils designed for outdoor
                grills.
              </li>
              <li>
                Supervise children around the grill area at all times. Persons
                under 16 years of age may use grills only under adult
                supervision.
              </li>
              <li>
                Be courteous with your time when others are waiting to use the
                grills.
              </li>
              <li>
                Management reserves the right to restrict grill usage at any
                time for safety reasons.
              </li>
              <li>
                Ensure all knobs are in the <strong>OFF</strong> position before
                leaving the grill area.
              </li>
              <li>
                Report any equipment damage or malfunction immediately. Do not
                attempt repairs yourself.
              </li>
              <li>Grills must always be attended while in use.</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
