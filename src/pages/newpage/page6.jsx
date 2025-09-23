import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    img: "/image7.jpg",
    price: "$49",
    title: "New Summer Collections For Man's Fashion.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,",
  },
  {
    img: "/image8.jpg",
    price: "$49",
    title: "New Summer Collections For Man's Fashion.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,",
  },
];

const ProductCard = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <Swiper
        spaceBetween={40}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          768: {
            // Desktop: show both sections stacked as before
            slidesPerView: 1,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth < 768 ? "column" : index === 0 ? "row" : "row-reverse",
                alignItems: "center",
                gap: "40px",
                maxWidth: "1100px",
                width: "100%",
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1", minWidth: "300px" }}>
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

              <div style={{ flex: "1", minWidth: "300px" }}>
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
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#2563eb",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#1e40af";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#2563eb";
                  }}
                >
                  View All Items
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCard;
