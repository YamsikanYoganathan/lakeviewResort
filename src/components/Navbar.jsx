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
    href: "/cottages/cottages-4",
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
  {
    name: "Cottage 8",
    description: "5 Bedroom cottage",
    href: "/cottages/cottage-8",
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
  // Removed isPopoverOpen state

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = classNames(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isHomePage && !hasScrolled
      ? "bg-transparent text-white"
      : "bg-white text-black shadow"
  );

  const logoColor =
    isHomePage && !hasScrolled ? "text-green-400" : "text-green-700";

  const desktopNavLinkColor =
    isHomePage && !hasScrolled ? "text-white" : "text-black";

  const mobileMenuIconColor =
    isHomePage && !hasScrolled ? "text-white" : "text-black";

  return (
    <Disclosure as="nav" className={navClass}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  {open ? (
                    <XMarkIcon className={`block h-6 w-6 ${mobileMenuIconColor}`} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={`block h-6 w-6 ${mobileMenuIconColor}`} aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo and desktop nav */}
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex shrink-0 items-center">
                  <Link
                    to="/"
                    className={`text-xl md:text-2xl font-bold tracking-tight ${logoColor}`}
                  >
                    Lakeview Resort
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                  <Popover 
                    className="relative"
                  >
                    {({ open: isPopoverOpen }) => ( 
                      <>
                        <PopoverButton className={classNames(
                          "inline-flex items-center gap-x-1 text-sm font-semibold transition outline-0",
                          desktopNavLinkColor
                        )}>
                          <span>Accommodations</span>
                          <ChevronDownIcon 
                            className={classNames("h-5 w-5 transition duration-200", isPopoverOpen ? 'rotate-180' : 'rotate-0')}
                          />
                        </PopoverButton>
                        
                        <PopoverPanel 
                          unmount={false}
                          className={classNames(
                            "absolute left-0 z-20 mt-6 w-64 rounded-md bg-white border border-gray-200 shadow-xl overflow-hidden",
                            "transition ease-out duration-300 transform",
                            isPopoverOpen
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                          )}
                        >
                          <div className="p-2">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-start px-4 py-3 rounded-lg hover:bg-green-100 transition duration-150"
                              >
                                <item.icon className="h-5 w-5 text-green-700 mr-3 mt-1" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </Popover>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        "rounded-md px-3 py-2 text-sm font-medium transition duration-150",
                        location.pathname === item.href
                          ? "font-semibold"
                          : "hover:opacity-80",
                        desktopNavLinkColor
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <EnquiryButton className="ms-6" />
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel 
            className={classNames(
              "sm:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-in-out origin-top",
              "bg-black/40 backdrop-blur-xl shadow-xl",
              open ? "h-[calc(100vh-4rem)] opacity-100" : "h-0 opacity-0"
            )}
          >
            <div className="space-y-6 px-2 flex flex-col items-center h-full justify-center overflow-y-auto pb-10">
              {/* Mobile Popover */}
              <Popover className="w-full">
                {({ open: popoverOpen }) => (
                  <>
                    <PopoverButton className="flex justify-center items-center gap-2 w-full px-3 py-2 rounded-md text-2xl font-medium text-white hover:opacity-90">
                      <span>Accommodations</span>
                      <ChevronDownIcon className={classNames("h-5 w-5 transition duration-300", popoverOpen ? 'rotate-180' : 'rotate-0')} />
                    </PopoverButton>
                    <PopoverPanel className="w-full mt-1">
                      <div className="p-2 flex flex-col items-center gap-2">
                        {solutions.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                                "flex items-center justify-center gap-2 p-3 rounded hover:bg-green-400/40 transition min-w-58 bg-green-400/10 backdrop-blur-xl w-full max-w-xs duration-300",
                                open
                                    ? `opacity-100 translate-y-0 delay-${100 + index * 50}`
                                    : "opacity-0 translate-y-2"
                            )}
                            onClick={() => {
                                document.querySelector('button[aria-expanded="true"]')?.click();
                            }}
                          >
                            <item.icon className="h-6 w-6 text-white" />
                            <span className="text-lg font-medium text-white">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
              
              {/* Mobile Navigation Links */}
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    "block rounded-md px-3 py-2 transition text-2xl font-medium text-white hover:opacity-90 duration-300",
                    open
                      ? `opacity-100 translate-y-0 delay-${600 + index * 50}`
                      : "opacity-0 translate-y-2"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <EnquiryButton 
                className={classNames(
                    "mt-6 duration-300",
                    open ? "opacity-100 delay-[800ms]" : "opacity-0"
                )} 
              />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}