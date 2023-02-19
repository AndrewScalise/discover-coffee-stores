"use client";

import React from "react";
import styles from "./banner.module.css";
import { handleButtonClick } from "../utils/handlers";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleButtonClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Banner;
