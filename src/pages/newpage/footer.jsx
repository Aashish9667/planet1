"use client"; // ✅ needed if using App Router

import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer
      className="bg-white border-t border-b border-gray-200 py-12 mx-auto"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 md:pl-16 flex flex-col md:flex-row justify-between gap-10 text-gray-700">
        {/* Left - Logo + Info */}
        <div className="md:w-1/4 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Planet Logo"
            width={128}
            height={40}
            className="mb-6"
          />
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <LocationOnIcon className="text-blue-600" fontSize="small" />
              <span>
                Shop 009A, Level 4, Block A, <br />
                Demo Park, Ottawa
              </span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="text-blue-600" fontSize="small" />
              <span>+1-613-555-0182</span>
            </li>
            <li className="flex items-center gap-2">
              <EmailIcon className="text-blue-600" fontSize="small" />
              <span>contact@yourmail.com</span>
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div className="md:w-1/6 flex-shrink-0">
          <h3 className="font-semibold text-lg mb-6">My Account</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">My Profile</li>
            <li className="hover:text-blue-600 cursor-pointer">
              My Order History
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Shopping Cart
            </li>
          </ul>
        </div>

        {/* Shop Departments */}
        <div className="md:w-1/6 flex-shrink-0">
          <h3 className="font-semibold text-lg mb-6">Shop Departments</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">
              Computers & Accessories
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Smartphones & Tablets
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              TV, Video & Audio
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Cameras, Photo & Video
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div className="md:w-1/4 flex-shrink-0">
          <h3 className="font-semibold text-lg mb-6">Download App</h3>
          <div className="flex flex-col gap-3">
            {/* yaha width ko h3 ke equal karne ke liye w-fit use kiya */}
            <a
              href="#"
              className="bg-blue-600  hover:bg-blue-700 text-white w-[220px] h-[60px] 
             rounded-lg text-sm font-medium flex 
             items-start justify-center gap-2"
            >
              <AppleIcon className="mt-4" />
              <span className="leading-tight mt-3">
                Download from <br />
                <span className="font-bold">Apple App Store</span>
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
                 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              />
            </a>

            <a
              href="#"
              className="bg-blue-600  hover:bg-blue-700 text-white w-[220px] h-[60px] 
             rounded-lg text-sm font-medium flex 
              items-start justify-center gap-2"
            >
              <PlayArrowIcon className="mt-4" />
              <span className="leading-tight mt-3">
                Get it on <br />{" "}
                <span className="font-bold">Google Play Store</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
