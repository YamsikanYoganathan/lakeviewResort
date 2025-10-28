import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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


export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Breadcrumb current="Privacy Policy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
        
        {/* Back Button and Title/Date */}
        <AnimatedDiv delay={100}>
          <Link
            to="/"
            className="flex items-center text-green-600 hover:text-green-800 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Homepage
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-10">Last updated: October 28, 2025</p>
        </AnimatedDiv>

        {/* Sections - Staggered reveal */}
        <section className="space-y-8 text-base leading-relaxed">
          {/* 1. Information We Collect */}
          <AnimatedDiv delay={200}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Direct Input:</strong> Name, email, phone, and messages
                  submitted via contact or booking forms.
                </li>
                <li>
                  <strong>Analytics:</strong> Browser details, device type, pages
                  visited, and session data through cookies.
                </li>
                <li>
                  <strong>Third-Party Services:</strong> Some data may be shared
                  with email, payment, or analytics providers for processing.
                </li>
              </ul>
            </div>
          </AnimatedDiv>

          {/* 2. How We Use Your Information */}
          <AnimatedDiv delay={300}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To respond to your inquiries and provide requested services.</li>
                <li>
                  To send resort updates, offers, or newsletters (only if you
                  subscribe).
                </li>
                <li>
                  To improve our services, website performance, and security.
                </li>
                <li>To comply with legal, safety, or regulatory obligations.</li>
              </ul>
            </div>
          </AnimatedDiv>

          {/* 3. Sharing Personal Information */}
          <AnimatedDiv delay={400}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                3. Sharing Personal Information
              </h2>
              <p>
                Your information is not sold or traded. However, we may share it
                with trusted third-party vendors for booking, payment, or analytics
                purposes, or when required by law.
              </p>
            </div>
          </AnimatedDiv>

          {/* 4. Your Rights */}
          <AnimatedDiv delay={500}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                4. Your Rights
              </h2>
              <p>
                You can request access to, correction, or deletion of your personal
                data at any time. You may also opt out of marketing communications
                by following the unsubscribe link in our emails.
              </p>
            </div>
          </AnimatedDiv>

          {/* 5. Data Security & Retention */}
          <AnimatedDiv delay={600}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                5. Data Security & Retention
              </h2>
              <p>
                We implement reasonable security measures to protect your personal
                data. However, no method of transmission is 100% secure. Data is
                retained only as long as necessary for legitimate business or legal
                purposes.
              </p>
            </div>
          </AnimatedDiv>

          {/* 6. Cookies & Tracking */}
          <AnimatedDiv delay={700}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                6. Cookies & Tracking
              </h2>
              <p>
                Cookies help us personalize your experience, remember preferences,
                and analyze website traffic. You can disable cookies through your
                browser settings, but this may affect some site features.
              </p>
            </div>
          </AnimatedDiv>

          {/* 7. Children’s Privacy */}
          <AnimatedDiv delay={800}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                7. Children’s Privacy
              </h2>
              <p>
                Our website and booking systems are not directed toward individuals
                under 16. We do not knowingly collect information from children.
              </p>
            </div>
          </AnimatedDiv>

          {/* 8. Links to Other Websites */}
          <AnimatedDiv delay={900}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                8. Links to Other Websites
              </h2>
              <p>
                Our site may include links to external websites. We are not
                responsible for the privacy practices or content of third-party
                sites.
              </p>
            </div>
          </AnimatedDiv>

          {/* 9. Policy Updates */}
          <AnimatedDiv delay={1000}>
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                9. Policy Updates
              </h2>
              <p>
                We may revise this Privacy Policy from time to time. Updates will
                be posted on this page with the revised “Last updated” date. Your
                continued use of the website implies acceptance of these changes.
              </p>
            </div>
          </AnimatedDiv>
        </section>
      </div>

      <Footer />
    </>
  );
}