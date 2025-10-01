"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    id: 1,
    name: "Accessories",
    products: "8 Products Available",
    img: "/image20.jpg",
  },
  
  {
    id: 3,
    name: "Electronics",
    products: "12 Products Available",
    img: "/image13.jpg",
  },
  {
    id: 2,
    name: "Bags",
    products: "4 Products Available",
    img: "/image12.jpg",
  },
  {
    id: 4,
    name: "Shoes",
    products: "24 Products Available",
    img: "/image14.jpg",
  },
  {
    id: 5,
    name: "Watches",
    products: "10 Products Available",
    img: "/image9.jpg",
  },
];

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-6 text-center -mt-5 md:mt-0 ">
      {/* Heading */}
      <h2
        className="text-2xl font-bold text-gray-900"
        data-aos="fade-down"
      >
        Shop By Category
      </h2>
      <p
        className="text-gray-500 mt-3 max-w-xl mx-auto"
        data-aos="fade-up"
      >
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </p>

      {/* Swiper Slider */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true} // makes it repeat infinitely
          slidesPerView={1} // always slide one by one
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1, direction: "vertical" }, // Mobile vertical
            640: { slidesPerView: 2, direction: "horizontal" }, // Tablet
            1024: { slidesPerView: 4, direction: "horizontal" }, // Desktop
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={cat.id}>
              <div
                className="text-center"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={300}
                    height={250}
                    className="w-full h-52 object-cover rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm">{cat.products}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <div className="mt-10" data-aos="fade-up">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition">
          Explore All Category
        </button>
      </div>
    </div>
  );
};

export default ShopByCategory;
