"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    date: "Dec 25, 2025",
    title: "Meet AutoManage, the best AI management tools",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/image1.png",
  },
  {
    id: 2,
    date: "Mar 15, 2025",
    title: "How to earn more money as a wellness coach",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/image2.png",
  },
  {
    id: 3,
    date: "Jan 05, 2025",
    title: "The no-fuss guide to upselling and cross selling",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/image3.png",
  },
];

const NewsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // initialize AOS
  }, []);

  return (
    <div className="py-5 px-1 bg-white mt-4">
      {/* Heading */}
      <div className="text-center mb-12">
        
        <h2 data-aos="fade-up" className="text-2xl md:text-2xl font-bold mt-4 mb-4">
          Our Recent News
        </h2>
        <p data-aos="fade-left" className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-[1100px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          breakpoints={{
            0: { slidesPerView: 1, pagination: false },
            768: { slidesPerView: 2, pagination: { clickable: true } },
            1024: { slidesPerView: 3, pagination: { clickable: true } },
          }}
        className="-mb-10 md:-mb-6"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div
                data-aos="zoom-in"
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">
                    {blog.date}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm">{blog.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSection;
