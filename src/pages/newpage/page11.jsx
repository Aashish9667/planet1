// pages/OfferSection.jsx
import React from "react";

export default function OfferSection() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      {/* Left Big Offer Section */}
      <div style={{ flex: 2, position: "relative" }}>
        <img
          src="/image4.jpg"
          alt="Offer Product"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            color: "#fff",
            maxWidth: "45%",
          }}
        >
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "black" }}>
            Mega Sale Up To 50% Off For All
          </h2>
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              margin: "15px 0 25px",
              lineHeight: "1.6",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan
            nunc.
          </p>
          <button
            style={{
              backgroundColor: "#3f51f5",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Grab The Offer
          </button>
        </div>
      </div>

      {/* Right Two Small Offers */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Top Offer */}
        <div style={{ position: "relative" }}>
          <img
            src="/image5.jpg"
            alt="Summer Collection"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              transform: "translateY(-50%)",
              color: "#fff",

              
            }}
          >
            <h3
              style={{
                color: "black",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              Summer Travel Collection
            </h3>
            <a
              href="#"
              style={{
                color: "black",
                fontSize: "14px",
                alignSelf: "flex-start",
                
              }}
            >
              Discover Now
            </a>
          </div>
        </div>

        {/* Bottom Offer */}
        <div style={{ position: "relative" }}>
          <img
            src="/image6.jpg"
            alt="iPhone Offer"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10%",
              transform: "translateY(-50%)",
              color: "#fff",
              
            }}
          >
            <h3
              style={{
                color: "black",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              Get 30% Off On iPhone
            </h3>

            <a
              href="#"
              style={{
                color: "black",
                fontSize: "14px",
                alignSelf: "flex-start",
              }}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
