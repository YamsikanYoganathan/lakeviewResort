import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Custom hook to handle the Intersection Observer logic
const useRevealOnScroll = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const AnimatedDiv = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const baseTransition = `transition-all duration-700 ease-out transform delay-[${delay}ms]`;

  return (
    <div
      ref={ref}
      className={`${baseTransition} ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};


export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <Breadcrumb current="Terms & Conditions" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
        
        {/* Back Button and Title */}
        <AnimatedDiv delay={100}>
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
        </AnimatedDiv>

        <section className="space-y-8 text-base leading-relaxed">
          
          {/* 1. Check-in / Check-out */}
          <AnimatedDiv delay={200}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                1. Check-In / Check-Out
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Check-In after 3:00 PM with photo ID and deposit.</li>
                <li>Check-Out before 11:00 AM. Late fees apply after 3:00 PM.</li>
              </ul>
            </div>
          </AnimatedDiv>

          {/* 2. Payment & Deposits */}
          <AnimatedDiv delay={300}>
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
          </AnimatedDiv>

          {/* 3. Cancellation Policy */}
          <AnimatedDiv delay={400}>
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
          </AnimatedDiv>

          {/* 4. Smoking & Fire Policy */}
          <AnimatedDiv delay={500}>
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
          </AnimatedDiv>

          {/* 5. Pets */}
          <AnimatedDiv delay={600}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">5. Pets</h2>
              <p>
                Allowed with $20 CAD fee per night. Must be supervised and waste
                cleaned promptly. Guests are responsible for any damage or noise
                caused by pets.
              </p>
            </div>
          </AnimatedDiv>

          {/* 6. House Rules */}
          <AnimatedDiv delay={700}>
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
          </AnimatedDiv>

          {/* 7. Damage and Littering */}
          <AnimatedDiv delay={800}>
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
          </AnimatedDiv>

          {/* 8. Force Majeure */}
          <AnimatedDiv delay={900}>
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
          </AnimatedDiv>

          {/* 9. Amenity Use */}
          <AnimatedDiv delay={1000}>
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
          </AnimatedDiv>

          {/* 10. BBQ Safety and Usage Rules */}
          <AnimatedDiv delay={1100}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                10. BBQ Safety and Usage Rules
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  These are **gas BBQ grills**. Never use wood,
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
                  Ensure all knobs are in the **OFF** position before
                  leaving the grill area.
                </li>
                <li>
                  Report any equipment damage or malfunction immediately. Do not
                  attempt repairs yourself.
                </li>
                <li>Grills must always be attended while in use.</li>
              </ul>
            </div>
          </AnimatedDiv>
        </section>
      </div>

      <Footer />
    </>
  );
}