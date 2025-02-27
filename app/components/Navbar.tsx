"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      // Get the first section to check its background color
      const sections = document.querySelectorAll('section');
      
      if (sections.length > 0) {
        const firstSection = sections[0];
        
        // Check if the section has a background color class
        const hasGreenBg = firstSection.classList.contains('bg-[#004733]');
        const hasWhiteBg = firstSection.classList.contains('bg-white');
        
        // Set colors based on the section's background
        if (hasGreenBg) {
          setTextColor("text-white");
          setNavBg("#004733"); // Set to green background when section is green
        } else if (hasWhiteBg) {
          setTextColor("text-black");
          setNavBg("white");
        } else {
          // Default colors if background can't be determined
          setTextColor("text-black");
          setNavBg("white");
        }
      }
    };

    // Set initial colors
    handleScroll();

    // Add scroll event listener for multi-section pages
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to determine border color based on text color
  const getBorderClass = () => {
    return textColor === "text-black" ? "border-black/30" : "border-white/30";
  };

  // Determine hover styles for the phone button based on text color
  const getPhoneButtonHoverStyles = () => {
    if (isHovered) {
      return textColor === "text-black"
        ? "bg-black text-white"
        : "bg-white text-black";
    }
    return "";
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-colors duration-300 z-40 ${textColor}`}
      style={{ backgroundColor: navBg }}
    >
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <Link href="/" className="font-shafarik text-xl font-bold">
          Better
        </Link>
        <div className="flex items-center gap-4">
          <button
            aria-label="Call"
            className={`p-1 rounded-full border ${getBorderClass()}`}
          >
            <Phone size={20} className={textColor} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setIsMenuOpen(true)}
            className="p-1"
          >
            <Menu size={24} className={textColor} />
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-white text-black w-full max-w-sm shadow-lg z-50 p-6"
          >
            <div>
              <span className="font-shafarik font-bold text-4xl">Better</span>
            </div>

            {/* Close Button */}
            <button
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-7 right-10"
            >
              <X size={32} />
            </button>

            {/* Menu Items */}
            <ul className="space-y-4 mt-10">
              <li>
                <Link href="/buy" className="block py-2">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/refinance" className="block py-2">
                  Refinance
                </Link>
              </li>
              <li>
                <Link href="/heloc" className="block py-2">
                  HELOC
                </Link>
              </li>
              <li>
                <Link href="/rates" className="block py-2">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/better-plus" className="block py-2">
                  Better+
                </Link>
              </li>
              <li>
                <Link href="/signin" className="block py-2">
                  Sign in
                </Link>
              </li>
            </ul>

            {/* Call Button in Menu */}
            <div className="mt-6">
              <button className="w-full flex items-center gap-3 px-4 py-2 bg-[#f0f7f0] text-black rounded-full">
                <Phone size={20} />
                Call us anytime at{" "}
                <a href="tel:4155238837" className="underline">
                  (415) 523 8837
                </a>
              </button>
            </div>

            <div className="absolute bottom-8 flex flex-col gap-4 ml-2">
              <button className="w-full flex flex-col items-center justify-center px-20 py-2 bg-[#1ee07f] text-black rounded-full shadow-sm hover:bg-[#18c96f] transition-all">
                <span className="font-poppins text-lg">Get started</span>
                <span className="text-sm font-extralight">
                  3 min | No credit impact
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 rounded-full bg-white text-black shadow-sm hover:bg-gray-100 transition-all">
                Sign in
                <User size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-12 py-6">
        <div className="flex items-center space-x-10">
          <Link href="/" className="font-shafarik text-2xl font-bold">
            Better
          </Link>
          <div className="flex space-x-20">
            <Link
              href="/buy"
              className={
                textColor === "text-black"
                  ? "hover:text-green-800"
                  : "hover:text-green-200"
              }
            >
              Buy
            </Link>
            <Link
              href="/refinance"
              className={
                textColor === "text-black"
                  ? "hover:text-green-800"
                  : "hover:text-green-200"
              }
            >
              Refinance
            </Link>
            <Link
              href="/heloc"
              className={
                textColor === "text-black"
                  ? "hover:text-green-800"
                  : "hover:text-green-200"
              }
            >
              HELOC
            </Link>
            <Link
              href="/rates"
              className={
                textColor === "text-black"
                  ? "hover:text-green-800"
                  : "hover:text-green-200"
              }
            >
              Rates
            </Link>
            <Link
              href="/better-plus"
              className={
                textColor === "text-black"
                  ? "hover:text-green-800"
                  : "hover:text-green-200"
              }
            >
              Better+
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-8 mr-12">
          <button
            aria-label="Call"
            className={`p-3 rounded-full border ${getBorderClass()} bg-transparent transition-all 
                   duration-300 ${getPhoneButtonHoverStyles()}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Phone size={20} />
          </button>

          {isHovered && (
            <div
              className="absolute right-20 top-20 w-72 bg-white text-black p-4 rounded-lg shadow-md 
                     transition-all duration-300"
            >
              Call us anytime at{" "}
              <a href="tel:4155238837" className="underline">
                415–523–8837
              </a>
            </div>
          )}

          <Link
            href="/signin"
            className={`relative px-6 py-2 rounded-full transition-all duration-300 
              ${
                textColor === "text-black"
                  ? "hover:bg-green-900 hover:text-white"
                  : "hover:bg-white hover:text-green-900"
              }`}
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;