"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({ tag, img, title, price, oldPrice }) => (
  <div
    style={{
      position: "relative",
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      width: "100%",
      maxWidth: "250px",
      margin: "0 auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    {tag && (
      <span
        style={{
          display: "inline-block",
          backgroundColor:
            tag === "Hot" ? "#ef4444" : tag === "New" ? "#10b981" : "#2563eb",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "4px",
          padding: "3px 8px",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        {tag}
      </span>
    )}

    <img
      src={img}
      alt={title}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "contain",
        borderRadius: "8px",
        marginBottom: "15px",
      }}
    />

    <h3
      style={{
        fontSize: "16px",
        fontWeight: "600",
        color: "#111827",
        marginBottom: "8px",
      }}
    >
      {title}
    </h3>

    <p
      style={{
        fontSize: "16px",
        color: "#111827",
        marginBottom: "8px",
      }}
    >
      £{price}{" "}
      {oldPrice && (
        <span
          style={{
            textDecoration: "line-through",
            color: "#6b7280",
            fontSize: "14px",
            marginLeft: "5px",
          }}
        >
          £{oldPrice}
        </span>
      )}
    </p>

    <p style={{ color: "#f59e0b", marginBottom: "15px" }}>★★★★★</p>

    <button
      style={{
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "10px 20px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
    >
      Add to Cart
    </button>
  </div>
);

const Page2 = () => {
  const products = [
    { tag: "Hot", img: "/image15.jpg", title: "Stylish Women Bag", price: "75.00" },
    { tag: "-50%", img: "/image9.jpg", title: "Stylish Watch For Man", price: "75.00", oldPrice: "150.00" },
    { img: "/image11.jpg", title: "Polo T-shirt For Man", price: "25.00" },
    { tag: "New", img: "/image10.jpg", title: "Luxury Wallet For Male", price: "95.00" },
    { tag: "New", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", title: "Stylish Watch For Man", price: "95.00" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        data-aos="fade-down"
        style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}
      >
        You may also like
      </h2>

      <p
        data-aos="fade-up"
        style={{ fontSize: "14px", color: "#6b7280", marginBottom: "40px" }}
      >
        There are many variations of passages of Lorem Ipsum available
        <br />
        but the majority have suffered alteration in some form.
      </p>

     <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  loop={true}
  freeMode={true}
  freeModeMomentum={false}
  autoplay={{
    delay: 0,              // no delay
    disableOnInteraction: false,
  }}
  speed={3000}             // control smoothness (higher = slower scroll)
  slidesPerView="auto"     // allow auto width
  allowTouchMove={false}   // prevent manual swipe so it looks like marquee
  style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "45px" }}
>
  {products.map((product, index) => (
    <SwiperSlide
      key={index}
      style={{ width: "250px" }} // fix card width for marquee
    >
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
