import Image from "next/image";
import React from "react";
import styles from "./bridge.module.css";
import Img from "../../../assets/images/Group 23.png";

export default function PayfricaBridge() {
  return (
    <div className={styles.container}>
      <div className={styles.phoneSection}>
        <div className={styles.phoneWrapper}>
          <Image
            src={Img}
            alt="Payfrica mobile app interface showing wallet balance"
            width={300}
            height={600}
            className={styles.phoneImage}
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
          />

          {/* Circular icons around the phone */}
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.badge}>Payfrica Bridge</div>

        <h2 className={styles.heading}>Simplifying Digital Assets</h2>

        <p className={styles.description}>
          Buy And Convert Tokens With Ease.{" "}
          <span className={styles.highlight}>Payfrica Bridge</span> Makes
          Digital Finance Accessible, Breaking Down The Barriers Of Complexity
          And Cost
        </p>

        <button className={styles.exploreButton}>Explore</button>
      </div>
    </div>
  );
}
