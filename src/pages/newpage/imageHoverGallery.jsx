// components/ImageHoverGallery.jsx
import React from "react";
import styles from "./imageHoverGallery.module.css";

export default function ImageHoverGallery() {
  const images = [
    { src: "/image1.jpg", effect: styles.zoom, title: "Zoom Effect" },
    { src: "/image2.jpg", effect: styles.rotate, title: "Rotate Effect" },
    { src: "/image3.jpg", effect: styles.grayscale, title: "Grayscale Effect" },
    { src: "/image4.jpg", effect: styles.blur, title: "Blur Effect" },
    { src: "/image5.jpg", effect: styles.overlayEffect, title: "Overlay Effect" },
    { src: "/image6.jpg", effect: styles.shadow, title: "Shadow Effect" },
    { src: "/image7.jpg", effect: styles.flip, title: "Flip Effect" },
    { src: "/image8.jpg", effect: styles.saturate, title: "Saturate Effect" },
    { src: "/image9.jpg", effect: styles.slide, title: "Slide Up Effect" },
    { src: "/image10.jpg", effect: styles.scaleRotate, title: "Scale + Rotate" },
  ];

  return (
    <div className={styles.gallery}>
      {images.map((img, idx) => (
        <div key={idx} className={`${styles.imgContainer} ${img.effect}`}>
          <img src={img.src} alt={img.title} />
          <div className={styles.overlay}>
            <p>{img.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
