import Image from "next/image";
import styles from "../features/features.module.css";
import GLobe from "../../../assets/images/Group 25.png";

export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>The Future of Finance is Here</h1>
        <p className={styles.subheading}>
          Crypto Or Cash, <span className={styles.highlight}>Payfrica</span>{" "}
          Makes Financial Transactions Effortless Across Africa.
        </p>

        <div className={styles.featureSection}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>Payfrica is live</span>
          </div>

          <h2 className={styles.featureHeading}>
            Transactions Beyond Barriers
          </h2>

          <p className={styles.featureText}>
            Make Fast, Secure Transactions In Your Local Currency, Even With
            Limited Connectivity.{" "}
            <span className={styles.highlight}>Payfrica Pay</span> Is Your
            Gateway To Seamless Financial Interactions
          </p>

          <button className={styles.exploreButton}>Explore</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.globeWrapper}>
          <Image
            src={GLobe}
            alt="Africa globe with network connections"
            width={400}
            height={400}
            className={styles.globeImage}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
