"use client";

import React from "react";
import styles from "./check.module.css"; // 👈 import CSS module

const Check = () => {
  return (
    <div className={styles.productImageContainer}>
      <img
        src="/image9.jpg"
        alt="Demo Product"
        className={styles.productImage}
      />
    </div>
  );
};

export default Check;
