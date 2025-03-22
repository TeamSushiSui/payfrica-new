import Image from "next/image";
import styles from "./cta.module.css";
import IPhone from "../../../assets/images/iPhone 16 Pro.png";

export default function CAllToAction() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Are you ready the Pay-volution?</h2>
        <p className={styles.description}>
          Personalize your settings, follow your progress, archive your
          highlights and notes automatically. Geez is the ultimate reading
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>

      <div className={styles.phonesContainer}>
        <div className={`${styles.phone} ${styles.phoneYellow}`}>
          <Image
            src={IPhone}
            alt="Payfrica app with yellow interface"
            width={300}
            height={400}
            className={styles.phoneImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}
