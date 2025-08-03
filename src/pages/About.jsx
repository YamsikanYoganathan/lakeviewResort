import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="mt-16 px-6 py-12 max-w-5xl mx-auto text-gray-800 space-y-10">
        <section>
          <h1 className="text-4xl font-semibold text-green-700 mb-4">
            Welcome to Lakeview Resort
          </h1>
          <p className="text-lg leading-relaxed">
            Nestled on the serene shores of Manitoulin Island in Northern Ontario, Lakeview Resort offers the perfect getaway for families, couples, and adventure seekers. With stunning views of the lake, cozy cottages, and a wide range of outdoor activities, we provide a peaceful escape from the hustle of everyday life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Cottages
          </h2>
          <p className="text-base leading-relaxed">
            Our rustic yet modern cottages are fully equipped for comfort and relaxation. Whether you're looking for a short weekend stay or a week-long retreat, each cottage includes essential amenities like:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>Fully equipped kitchens</li>
            <li>Private decks with BBQs</li>
            <li>Lake access and swimming areas</li>
            <li>Fireplaces for cozy evenings</li>
            <li>Free Wi-Fi and parking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Why Choose Lakeview Resort?
          </h2>
          <p className="text-base leading-relaxed">
            Lakeview Resort is ideal for reconnecting with nature while enjoying modern conveniences. We offer:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>Scenic lakefront views</li>
            <li>Boating and canoe rentals</li>
            <li>Nearby hiking trails and fishing spots</li>
            <li>Family-friendly and pet-welcoming atmosphere</li>
            <li>Affordable and flexible pricing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Location
          </h2>
          <p className="text-base leading-relaxed">
            Located on beautiful Manitoulin Island, the largest freshwater island in the world, our resort is a short drive from local shops, scenic trails, cultural landmarks, and natural wonders. It's the perfect base for exploring Northern Ontario.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed">
            At Lakeview Resort, our mission is simple — to offer our guests a relaxing and memorable stay surrounded by nature. We strive to provide a high level of service, clean and comfortable accommodations, and unforgettable lakeside experiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-base leading-relaxed">
            Have questions or ready to book your stay?{" "}
            <a href="/contact" className="text-green-600 underline">
              Get in touch with us
            </a>{" "}
            — we’d love to hear from you!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
