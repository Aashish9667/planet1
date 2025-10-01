"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({ tag, img, title, price, oldPrice }) => (
  <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center w-full max-w-[250px] shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1  ">
    {tag && (
      <span
        className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${
          tag === "Hot"
            ? "bg-red-500"
            : tag === "New"
            ? "bg-green-500"
            : "bg-blue-600"
        }`}
      >
        {tag}
      </span>
    )}

    <img
      src={img}
      alt={title}
      className="w-full h-[180px] object-contain rounded-md mb-4"
    />

    <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{title}</h3>

    <p className="text-[16px] text-gray-900 mb-2">
      ₹{price}{" "}
      {oldPrice && (
        <span className="line-through text-gray-400 text-sm ml-1">
          ₹{oldPrice}
        </span>
      )}
    </p>

    <p className="text-yellow-500 mb-4">★★★★★</p>

    <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:bg-blue-800">
      Add to Cart
    </button>
  </div>
);

const Page2 = () => {
  const products = [
    {
      tag: "Hot",
      img: "/image12.jpg",
      title: "Stylish Women Bag",
      price: "75.00",
    },
    {
      tag: "-50%",
      img: "/image9.jpg",
      title: "Stylish Watch For Man",
      price: "75.00",
      oldPrice: "150.00",
    },
    { img: "/image11.jpg", title: "Polo T-shirt For Man", price: "25.00" },
    {
      tag: "New",
      img: "/image10.jpg",
      title: "Luxury Wallet For Male",
      price: "95.00",
    },
    {
      tag: "New",
      img: "/image20.jpg",
      title: "Stylish Watch For Man",
      price: "95.00",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="text-center font-sans mt-10 md:mt-10 px-5">
      <h2 data-aos="fade-down" className="text-[22px] font-bold mb-2 md:mb-4">
        You may also like
      </h2>

      <p className="text-lg text-gray-500 mb-10">
        There are many variations of passages of Lorem Ipsum available but the
        <br />
        majority have suffered alteration in some form.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={500}
         // default mobile
        breakpoints={{
          640: { slidesPerView: 2 }, // small tablets
          1024: { slidesPerView: 4 }, // desktop
        }}
        className="max-w-[1100px] mx-auto"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div data-aos="zoom-in" data-aos-delay={index * 150}>
              <ProductCard {...product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Page2;
