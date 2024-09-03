import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <p className=" font-bold italic ">front</p>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#CC0049] hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
              Sign Up
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              About
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <button className="w-full bg-white text-black px-4 py-2 rounded-full hover:bg-[#CC0049] hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
