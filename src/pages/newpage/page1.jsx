"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    img: "/image7.jpg",
    price: "₹499",
    title: "New Summer Collections For Man's Fashion.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,",
  },
  {
    img: "/image8.jpg",
    price: "₹499",
    title: "New Summer Collections For Man's Fashion.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,",
  },
];

const ProductCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="mt-5 md:mt-[40px] px-5 py-[60px] font-sans bg-white flex flex-col gap-[60px] mb-0">
      {/* Desktop Layout */}
      <div className="desktop-cards">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-section"
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "1100px",
              width: "100%",
              gap: "40px",
              margin: "0 auto",
              flexWrap: "wrap",
              flexDirection: index === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px" }} data-aos="fade-up">
              <img
                src={product.img}
                alt={`Product ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ flex: "1", minWidth: "300px" }} data-aos="fade-left">
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Start From {product.price}
              </p>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "15px",
                  lineHeight: "1.3",
                }}
              >
                {product.title}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  marginBottom: "25px",
                  lineHeight: "1.6",
                }}
              >
                {product.desc}
              </p>
              <button
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1e40af")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="mobile-swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className="product-section"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
                data-aos="fade-up"
              >
                <div style={{ width: "100%" }}>
                  <img
                    src={product.img}
                    alt={`Product ${index + 1}`}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <p
                    style={{
                      color: "#2563eb",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    Start From {product.price}
                  </p>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#111827",
                      marginBottom: "10px",
                      lineHeight: "1.3",
                    }}
                  >
                    {product.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#6b7280",
                      marginBottom: "20px",
                      lineHeight: "1.6",
                    }}
                  >
                    {product.desc}
                  </p>
                  <button
                    style={{
                      backgroundColor: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "10px 20px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#1e40af")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#2563eb")
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        .mobile-swiper {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-cards {
            display: none;
          }
          .mobile-swiper {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductCard;
