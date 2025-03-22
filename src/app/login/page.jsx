import React from "react";
import "../login/style.css";
import Image from "next/image";
import Bg from "../assets/images/background-with-shapes.png";
import LoginButton from "./login-button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="screen">
      <div className="container">
        <Image src={Bg} alt="auth-background" className="first-block" />

        <div className="second-block">
          <div className="loginForm">
            <h1>Login</h1>
            <div className="socialButtons">
              <LoginButton provider={"google"} />
              <LoginButton provider={"facebook"} />
              <LoginButton provider={"twitch"} />
              <LoginButton provider={"microsoft"} />
            </div>
            <div className="signupLink">
              Don't have an account? <Link href="/">SignUp</Link>
            </div>
            <div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
