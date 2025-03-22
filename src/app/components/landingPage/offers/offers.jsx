import React from "react";
import { Clock, CreditCard, DollarSign, HandCoins } from "lucide-react";
import styles from "./offers.module.css";

export default function Offers() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>The African Payvolution</h2>

      <p className={styles.subheading}>
        Want to pay anything so easy with the touch of a finger. Through{" "}
        <span className={styles.highlight}>Payfrica</span> you can make
        practically any transaction.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <DollarSign className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Buy SUI & USDC</h3>
          <p className={styles.cardDescription}>
            Buy Sui tokens and USDC without any hassle
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <CreditCard className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Offline Payment</h3>
          <p className={styles.cardDescription}>
            Make Payments with No Internet Connection
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <HandCoins className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Save & Earn</h3>
          <p className={styles.cardDescription}>
            Save with friends and family and earn interest
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Clock className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Fast Transaction</h3>
          <p className={styles.cardDescription}>
            No more Delayed and failed transactions.
          </p>
        </div>
      </div>
    </div>
  );
}
