import React from 'react';

export default function EnquiryButton({ className = "" }) {
  return (
    <a
      href="/contact"
      className={`bg-green-700 text-white sm:px-4 px-8 sm:py-2 py-2.5 rounded-md text-sm font-medium hover:bg-green-900 transition duration-300 ${className}`}
    >
      Enquire Now
    </a>
  );
}