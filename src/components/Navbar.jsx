import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import EnquiryButton from "./EnquiryButton";
import { Link, useLocation } from "react-router-dom";

const solutions = [
  {
    name: "Cottage 1",
    description: "2 Bedroom cottage",
    href: "/cottages/cottage-1",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Cottage 2",
    description: "3 Bedroom cottage",
    href: "/cottages/cottage-2",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Cottage 3",
    description: "3 Bedroom cottage",
    href: "/cottages/cottage-3",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Cottage 4",
    description: "3 Bedroom cottage",
    href: "/cottages/cottage-4",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Cottage 5",
    description: "2 Bedroom cottage",
    href: "/cottages/cottage-5",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Cottage 6",
    description: "1 Bedroom cottage",
    href: "/cottages/cottage-6",
    icon: ArrowDownRightIcon,
  },
  {
    name: "Cottage 7",
    description: "4 Bedroom cottage",
    href: "/cottages/cottage-7",
    icon: ArrowDownRightIcon,
  },
];

const navigation = [{ name: "About", href: "/about" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`sticky w-full top-0 z-50 transition duration-300 ${
        hasScrolled
          ? "bg-white backdrop-blur shadow-xs"
          : "bg-white backdrop-blur shadow-xs"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-950 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo and Desktop Menu */}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <h1 className="text-2xl font-bold">
                <Link
                  to="/"
                  className="text-xl md:text-2xl font-bold tracking-tight text-green-700"
                >
                  Lakeview Resort
                </Link>
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-950 hover:text-gray-800 transition outline-0">
                  <span>Accommodations</span>
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                </PopoverButton>
                <PopoverPanel className="absolute left-0 z-20 mt-6 w-64 rounded-md bg-white border border-gray-200 backdrop-blur-2xl shadow">
                  <div className="p-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-start px-4 py-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <item.icon
                          className="h-6 w-6 text-gray-600 mr-3"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-950">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "text-gray-950 font-semibold"
                      : "text-gray-950 hover:text-gray-800",
                    "rounded-md px-3 py-2 text-sm font-semibold transition"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <EnquiryButton className="ms-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-6 px-2 pt-2 pb-3 flex flex-col items-center h-screen justify-center bg-white/90 backdrop-blur">
          <Popover className="w-full">
            <PopoverButton className="flex justify-center items-center gap-2 w-full px-3 py-2 rounded-md text-2xl sm:text-md font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition">
              <span>Accommodations</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel className="w-full mt-1 rounded-lg bg-white">
              <div className="p-2 flex flex-col items-center justify-between text-center gap-2">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-2 p-2 rounded hover:bg-gray-100 transition min-w-48"
                  >
                    <item.icon
                      className="h-6 w-6 text-gray-600 mr-2"
                      aria-hidden="true"
                    />
                    <span className="text-lg text-gray-600">{item.name}</span>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600 hover:text-gray-900",
                "block rounded-md px-3 py-2 transition duration-300 text-2xl sm:text-md font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <EnquiryButton className="text-center mt-2" />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
