import Image from "next/image";
import styles from "./savings.module.css";
import Piggy from "../../../assets/images/Group 21.png";

export default function PayfricaSavings() {
  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
        <div className={styles.badge}>Payfrica Bridge</div>

        <h2 className={styles.heading}>Save With People You Trust</h2>

        <p className={styles.description}>
          Join Or Create A{" "}
          <span className={styles.highlight}>Savings Circle</span> Where Your
          Money Is Safe And Your Community Thrives. With Payfrica, Savings Lead
          To Collective Empowerment
        </p>

        <button className={styles.exploreButton}>Explore</button>
      </div>

      <div className={styles.imageSection}>
        <Image
          src={Piggy}
          alt="Hands holding a pink piggy bank"
          width={500}
          height={500}
          className={styles.piggyBankImage}
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
        />
      </div>
    </div>
  );
}
