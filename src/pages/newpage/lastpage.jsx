"use client"; // ✅ if using Next.js App Router (app directory)

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentFooter = () => {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
        {/* Payment Image */}
        <Image
          src="/payment1.svg" // make sure this file is in /public
          alt="Payment methods"
          width={300}
          height={30}
        />

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © 2025 TailGrids. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default PaymentFooter;
