"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="lg:hidden">
      <div className="relative">
        <button
          className="block text-gray-800 hover:text-gray-900 relative mb-5 mr-7 md:mr-14 md:mb-10"
          onClick={toggleMenu}
        >
          <div
            className={`h-[2px] w-[15px] md:w-[20px] bg-[#F5F5F5] rounded-lg absolute transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[10px]" : "translate-y-0"
              }`}
          ></div>
          <div
            className={`h-[2px] w-[40px] bg-[#F5F5F5] rounded-lg absolute transition-opacity duration-300 ease-in-out ${isOpen ? "-rotate-45 translate-y-[7px] " : "opacity-100"
              }`}
            style={{ top: "10px" }}
          ></div>
          <div
            className={`h-[2px] w-[15px] md:w-[20px] bg-[#F5F5F5] rounded-lg absolute left-4 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[25.5px] " : "translate-y-[20px]"
              }`}
          ></div>
        </button>
        <div
          className={`flex flex-col absolute top-[45.2px] space-y-4 z-10 font-semibold text-[#808080a9] p-10 md:p-20 md:text-xl bg-[#F5F5F5] right-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            href="/"
            className={`hover:text-[#1E0C06] hover:underline ${currentPath === "/" ? "text-[#1E0C06]" : ""
              }`}
            onClick={handleCloseMenu}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-[#1E0C06] hover:underline ${currentPath === "/gallery" ? "text-[#1E0C06]" : ""
              }`}
            onClick={handleCloseMenu}
          >
            Gallery
          </Link>
          <Link
            href="/prices"
            className={`hover:text-[#1E0C06] hover:underline ${currentPath === "/prices" ? "text-[#1E0C06]" : ""
              }`}
            onClick={handleCloseMenu}
          >
            Prices for services
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#1E0C06] hover:underline ${currentPath === "/about" ? "text-[#1E0C06]" : ""
              }`}
            onClick={handleCloseMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#1E0C06] hover:underline ${currentPath === "/contact" ? "text-[#1E0C06]" : ""
              }`}
            onClick={handleCloseMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
