import React from 'react';
import { Link} from 'react-router-dom';
import cottage1 from '../assets/cottage-1-exterior.webp';
import cottage2 from '../assets/cottage-2-exterior.webp';
import cottage3 from '../assets/cottage-3-exterior.webp';
import cottage4 from '../assets/cottage-4-exterior.webp';
import cottage5 from '../assets/cottage-5-exterior.webp';
import cottage6 from '../assets/cottage-6-exterior.webp';
import cottage7 from '../assets/cottage-7-exterior.webp';

const cottages = [
  {
    id: 1,
    name: 'Cottage 1',
    href: '/cottages/cottage-1',
    imageSrc: cottage1,
    imageAlt: 'Lakeview Cottage exterior with lake view.',
    description: 'Cozy lakefront stay with beautiful sunrise views.',
  },
  {
    id: 2,
    name: 'Cottage 2',
    href: '/cottages/cottage-2',
    imageSrc: cottage2,
    imageAlt: 'Forest Retreat nestled in trees.',
    description: 'Peaceful forest cottage surrounded by nature.',
  },
  {
    id: 3,
    name: 'Cottage 3',
    href: '/cottages/cottage-3',
    imageSrc: cottage3,
    imageAlt: 'Family Cottage with spacious yard.',
    description: 'Spacious accommodation perfect for families.',
  },
  {
    id: 4,
    name: 'Cottage 4',
    href: '/cottages/cottage-4',
    imageSrc: cottage4,
    imageAlt: 'Luxury Cottage with premium design.',
    description: 'Premium amenities and comfort for your stay.',
  },
  {
    id: 5,
    name: 'Cottage 5',
    href: '/cottages/cottage-5',
    imageSrc: cottage5,
    imageAlt: 'Romantic Cabin for couples.',
    description: 'Perfect getaway for couples by the lake.',
  },
  {
    id: 6,
    name: 'Cottage 6',
    href: '/cottages/cottage-6',
    imageSrc: cottage6,
    imageAlt: 'Adventure Cabin for nature lovers.',
    description: 'For those seeking a bit of adventure.',
  },
  {
    id: 7,
    name: 'Cottage 7',
    href: '/cottages/cottage-7',
    imageSrc: cottage7,
    imageAlt: 'Hillside Cottage with panoramic views.',
    description: 'Stay on the hillside with panoramic views.',
  },
];


export default function CottageList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl text-center">Our Cottages</h2>
        <p className="mt-4 text-lg text-gray-600 text-center mx-auto">We offer fully equipped, modern self-catered cottages.</p>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cottages.map((cottage) => (
            <Link
              key={cottage.id}
              to={cottage.href}
              className="group relative block rounded-lg overflow-hidden shadow-lg shadow-gray-200 hover:shadow-lg transition"
            >
              <img
                src={cottage.imageSrc}
                alt={cottage.imageAlt}
                className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{cottage.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{cottage.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
