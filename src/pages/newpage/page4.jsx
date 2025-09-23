"use client";

import React, { useEffect } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplayIcon from "@mui/icons-material/Replay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    icon: <LocalShippingIcon sx={{ fontSize: 28, color: "#2563eb" }} />,
    title: "Free delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eget lorem.",
  },
  {
    id: 2,
    icon: <PaymentIcon sx={{ fontSize: 28, color: "#2563eb" }} />,
    title: "Online Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eget lorem.",
  },
  {
    id: 3,
    icon: <ReplayIcon sx={{ fontSize: 28, color: "#2563eb" }} />,
    title: "Easy Return",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eget lorem.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className=" py-10 px-6 bg-gray-50 mt-15 md:mt-9">
      <div className="max-w-[1100px] mx-auto">
        <h2
          className="text-2xl font-bold  mb-1 text-center "
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p
          className="text-gray-600 text-center mb-10"
          data-aos="fade-up"
        >
          Check out our premium services that make shopping easier for you.
        </p>

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
            768: { slidesPerView: 2, pagination: { clickable: true },},
            1024: { slidesPerView: 3, pagination: { clickable: true },},
          }}
          style={{ width: "100%", marginBottom:"50px" }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div
                className="h-[220px] flex flex-col items-center justify-center text-center p-5 border border-gray-200 rounded-lg bg-white shadow-md hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150} // stagger animation
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center
                                transition-transform duration-500 hover:rotate-[360deg] hover:bg-gray-300">
                  {React.cloneElement(service.icon, { 
                      className: "transition-colors duration-500 hover:text-gray-700" 
                  })}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
