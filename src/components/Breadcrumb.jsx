import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb({ current }) {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-gray-100 px-5 py-3 text-sm text-gray-600">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline text-green-600">
            Home
          </Link>
        </li>
        {path.map((p, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mx-2">/</span>
            <span className={idx === path.length - 1 ? "font-semibold text-gray-800" : "text-green-600"}>
              {current || p.charAt(0).toUpperCase() + p.slice(1)}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}