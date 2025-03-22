"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import Bg from "../assets/images/background-with-shapes.png";
import { useCustomWallet } from "@/contexts/CustomWallet";
import { useRouter } from "next/navigation"; 

export default function LoginPage() {
  const router = useRouter();
  const { isConnected, logout, redirectToAuthUrl, emailAddress, address } =
    useCustomWallet();
    // const isConnected = true;
    if (isConnected) {
      router.push("/dashboard"); // Redirect instead of rendering the page component
      return null;
    }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.brandSection}>
          <Image
            src={Bg}
            alt="Payfrica Logo"
            fill
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.formSection}>
          <h1 className={styles.heading}>Login</h1>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton} onClick={redirectToAuthUrl}>
              <span className={styles.socialIconGoogle}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </span>
              Sign in with Google
            </button>

            <button className={styles.socialButton}>
              <span className={styles.socialIconFacebook}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="#1877F2"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </span>
              Sign in with Facebook
            </button>

            <button className={styles.socialButton}>
              <span className={styles.socialIconTwitch}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="#9146FF"
                    d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"
                  />
                </svg>
              </span>
              Sign in with Twitch
            </button>

            <button className={styles.socialButton}>
              <span className={styles.socialIconMicrosoft}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#F25022" d="M1 1h10v10H1z" />
                  <path fill="#00A4EF" d="M1 13h10v10H1z" />
                  <path fill="#7FBA00" d="M13 1h10v10H13z" />
                  <path fill="#FFB900" d="M13 13h10v10H13z" />
                </svg>
              </span>
              Sign in with Microsoft
            </button>
          </div>

          <div className={styles.signupText}>
            Don't you have an account?{" "}
            <Link href="/signup" className={styles.signupLink}>
              Sign up
            </Link>
          </div>

          <div className={styles.copyright}>© 2023 ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  );
}
