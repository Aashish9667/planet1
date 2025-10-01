"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // ✅ Next.js image import
import { Phone, User, Heart, ShoppingCart, Menu, X } from "lucide-react";

const routes = {
  Home: "#home",
  Shop: "#shop",
  Products: "#products",
  Accessories: "#accessories",
  Contact: "#footer",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleNavClick = (item) => {
    const id = routes[item];
    const element = document.querySelector(id);
    if (element) {
      const navbarHeight = 70; // navbar ki height (px)
      const offset = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div
          className="flex items-center justify-between h-16"
          data-aos="fade-down"
        >
          {/* ✅ Logo Image replace Planet text */}
          <div className="flex items-center ml-0 md:ml-10">
            <Image
              src="/logo.svg"
              alt="Planet Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-800 font-medium ">
            {Object.keys(routes).map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4 mr-14">
            {/* Phone */}
            <div className="flex items-center space-x-2 text-sm font-medium">
              <div className="p-2 rounded-full bg-gray-100">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Need Help?</p>
                <p className="font-semibold">+001 123 456 789</p>
              </div>
            </div>

            {/* User */}
            <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <User size={20} />
            </div>

            {/* Heart with Badge */}
            <div className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Cart with Badge */}
            <div className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg px-4 py-4 space-y-2 z-40">
          {Object.keys(routes).map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left hover:text-blue-600"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
