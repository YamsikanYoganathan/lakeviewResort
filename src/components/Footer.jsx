import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 outline-2 outline-green-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo and site name */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-green-700"
          >
            Lakeview Resort
          </Link>

          {/* Sitemap links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              to="/cottages"
              className="text-green-800 hover:text-green-900 text-sm transition"
            >
              Cottages
            </Link>
            <Link
              to="/about"
              className="text-green-800 hover:text-green-900 text-sm transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-green-800 hover:text-green-900 text-sm transition"
            >
              Contact
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-green-100 pt-6 text-center text-sm text-green-700">
          © {new Date().getFullYear()} Lakeview Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
