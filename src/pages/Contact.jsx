import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect, useRef } from "react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [headerRef, isHeaderVisible] = useRevealOnScroll(0.1);
  const [detailsRef, isDetailsVisible] = useRevealOnScroll(0.1);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Lakeview Cottages Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@lakeviewcottages.com?subject=${subject}&body=${body}`;
  };

  const baseTransition = "transition-all duration-1000 ease-out transform";

  return (
    <>
      <Navbar />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-7xl">
          {/* Header Section - Slide-up and Fade-in */}
          <div
            ref={headerRef}
            className={`${baseTransition} duration-700 ${
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl text-center">
              Enquire About Lakeview Cottages
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center max-w-xl mx-auto">
              Contact us for pricing, availability, or to book your next peaceful escape.
            </p>
          </div>

          {/* Contact Details and Form Grid */}
          <div 
            ref={detailsRef}
            className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${baseTransition} duration-1000 delay-300 ${
              isDetailsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-8 w-8 text-green-600 shrink-0" />
                <div>
                  <a href="tel:+17052822888" className="text-base text-gray-800 hover:underline">
                    +1 705-282-2888
                  </a>
                  <p className="text-sm text-gray-500">Available 9am - 8pm daily</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-8 w-8 text-green-600 shrink-0" />
                <div>
                  <a href="mailto:info@lakeviewcottages.com" className="text-base text-gray-800 hover:underline">
                    info@lakeviewcottages.com
                  </a>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-8 w-8 text-green-600 shrink-0" />
                <div>
                  <a
                    href="https://www.google.com/maps?q=879+Lakeshore+Rd,+Kagawong,+ON+P0P+1J0,+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-800 hover:underline"
                  >
                    879 Lakeshore Rd, Kagawong, ON P0P 1J0, Canada
                  </a>
                  <p className="text-sm text-gray-500">Find us easily via Google Maps</p>
                </div>
              </div>
              <div className="aspect-video rounded-md overflow-hidden mt-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.272581932917!2d-82.26375740000002!3d45.878028900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d3228f1178d9e59%3A0xa1922cfd3b9c4d63!2sLakeview%20Resort!5e1!3m2!1sen!2slk!4v1752821619148!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lakeview Cottages Location"
                ></iframe>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-gray-50/60 p-6 sm:p-8 rounded-md w-full">
              <h2 className="text-xl font-semibold tracking-tight text-gray-950 sm:text-2xl text-start mb-4">
                Enquiry Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know your preferred dates, number of guests, or any questions."
                    className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-green-600"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-green-600 px-4 py-3 text-white font-semibold hover:bg-green-700 transition"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}