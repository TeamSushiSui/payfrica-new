import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import styles from "./footer.module.css";
import Logo from "../../../assets/images/payfrica-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoSection}>
            <Image
              src={Logo}
              width={120}
              height={30}
              alt="Payfrica Logo"
              className={styles.logoText}
            />

            <p className={styles.tagline}>The Future of Finance in Africa</p>
          </div>
          <p className={styles.description}>
            Making financial transactions effortless across Africa through
            innovative payment solutions.
          </p>
          <div className={styles.socialLinks}>
            <Link href="#" className={styles.socialIcon}>
              <Facebook size={20} />
            </Link>
            <Link href="#" className={styles.socialIcon}>
              <Twitter size={20} />
            </Link>
            <Link href="#" className={styles.socialIcon}>
              <Instagram size={20} />
            </Link>
            <Link href="#" className={styles.socialIcon}>
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Products</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="#">Payfrica Bridge</Link>
            </li>
            <li>
              <Link href="#">Savings Circle</Link>
            </li>
            <li>
              <Link href="#">Offline Payments</Link>
            </li>
            <li>
              <Link href="#">Crypto Exchange</Link>
            </li>
            <li>
              <Link href="#">Business Solutions</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <ul className={styles.contactInfo}>
            <li>
              <Mail size={16} className={styles.contactIcon} />
              <span>info@payfrica.com</span>
            </li>
            <li>
              <Phone size={16} className={styles.contactIcon} />
              <span>+234 800 PAYFRICA</span>
            </li>
            <li>
              <MapPin size={16} className={styles.contactIcon} />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Payfrica. All rights reserved.
        </div>
        <div className={styles.legalLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
