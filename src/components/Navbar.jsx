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
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";
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
    const onScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white text-black shadow" : "bg-transparent text-white sm:backdrop-blur-none md:py-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              {({ open }) =>
                open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )
              }
            </DisclosureButton>
          </div>

          {/* Logo and desktop nav */}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <Link
                to="/"
                className={`text-xl md:text-2xl font-bold tracking-tight ${
                  hasScrolled ? "text-green-700" : "text-green-400"
                }`}
              >
                Lakeview Resort
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold transition outline-0">
                  <span>Accommodations</span>
                  <ChevronDownIcon className="h-5 w-5" />
                </PopoverButton>
                <PopoverPanel className="absolute left-0 z-20 mt-6 w-64 rounded-md bg-white border border-gray-200 shadow">
                  <div className="p-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-start px-4 py-3 rounded-lg hover:bg-gray-50 transition"
                      >
                        <item.icon className="h-6 w-6 text-gray-600 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
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
                      ? "font-semibold"
                      : "hover:opacity-80",
                    "rounded-md px-3 py-2 text-sm font-medium"
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

      {/* Mobile nav panel */}
      <DisclosurePanel
        className={`sm:hidden transition-all duration-300 ${
          hasScrolled
            ? "bg-white text-black"
            : "bg-transparent text-white backdrop-blur-lg"
        }`}
      >
        <div className="space-y-6 px-2 pt-2 pb-3 flex flex-col items-center h-screen justify-center">
          <Popover className="w-full">
            <PopoverButton className="flex justify-center items-center gap-2 w-full px-3 py-2 rounded-md text-2xl font-medium hover:opacity-90">
              <span>Accommodations</span>
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
              className={`w-full mt-1 rounded-lg ${
                hasScrolled ? "bg-white text-black" : "bg-white text-black"
              }`}
            >
              <div className="p-2 flex flex-col items-center gap-2">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-2 p-2 rounded hover:bg-gray-100 transition min-w-48"
                  >
                    <item.icon className="h-6 w-6 text-gray-600" />
                    <span className="text-lg">{item.name}</span>
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
              className="block rounded-md px-3 py-2 transition text-2xl font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <EnquiryButton className="mt-4" />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
