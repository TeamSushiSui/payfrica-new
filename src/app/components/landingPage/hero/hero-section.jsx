"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../landingPage/hero/hero.module.css";
import { Menu, X } from "lucide-react";
import Logo from "../../../assets/images/payfrica-logo.png";
import AfricanWoman from "../../../assets/images/africa-woman.png";
import SuiLogo from "../../../assets/images/sui-logo.png";

export default function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src={Logo}
            alt="Payfrica Logo"
            width={120}
            height={30}
            className={styles.logoImage}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#">Payfrica Bridge</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#">Payfrica Pay</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#">Payfrica Card</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#">Help</Link>
            </li>
          </ul>
        </nav>

        <Link href="#" className={styles.discoverButton}>
          Discover More
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <div className={styles.sidebarHeader}>
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Payfrica Logo"
            width={120}
            height={40}
            className={styles.logoImage}
          />
          <button
            className={styles.closeSidebarButton}
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          <ul className={styles.sidebarNavList}>
            <li className={styles.sidebarNavItem}>
              <Link href="#">Payfrica Bridge</Link>
            </li>
            <li className={styles.sidebarNavItem}>
              <Link href="#">Payfrica Pay</Link>
            </li>
            <li className={styles.sidebarNavItem}>
              <Link href="#">Payfrica Card</Link>
            </li>
            <li className={styles.sidebarNavItem}>
              <Link href="#">Help</Link>
            </li>
          </ul>
        </nav>
        <Link href="#" className={styles.sidebarDiscoverButton}>
          Discover More
        </Link>
      </div>

      {/* Overlay for when sidebar is open */}
      {isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar} />
      )}

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Bridging The Gap, Empowering Transactions
          </h1>
          <p className={styles.heroSubtitle}>
            Seamless Payments, Effortless Savings, And Instant Token Conversions
            Just For Africa, Powered By Sol
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#" className={styles.primaryButton}>
              Quick Account
            </Link>
            <Link href="#" className={styles.secondaryButton}>
              Sign In
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src={AfricanWoman}
            alt="Happy Payfrica Customer"
            width={400}
            height={500}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>

      <div className={styles.campusScrollContainer}>
        <div className={styles.campusSection}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className={styles.campusItem}>
              <div className={styles.campusIcon}>
                <Image src={SuiLogo} alt="Campus Icon" width={70} height={70} />
              </div>
              <span className={styles.campusText}>OUT ON CAMPUS</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
