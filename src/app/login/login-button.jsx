import React from "react";
import Google from "../assets/images/google-icon.png";
import Twitch from "../assets/images/twitch-icon.png";
import Facebook from "../assets/images/facebook-icon.png";
import Microsoft from "../assets/images/microsoft-icon.png";
import Image from "next/image";

/**
 * @param {provider:"twitter" | "google" | "twitch" | "microsoft"}
 * @returns {JSX.Element}
 */

const providers = {
  google: {
    img: {
      src: Google,
      alt: "Google-Img",
    },
    label: "Sign In With Google",
  },
  facebook: {
    img: {
      src: Facebook,
      alt: "Facebook-Img",
    },
    label: "Sign In With Twitter",
  },
  twitch: {
    img: {
      src: Twitch,
      alt: "Twitch-Img",
    },
    label: "Sign In With Twitch",
  },
  microsoft: {
    img: {
      src: Microsoft,
      alt: "Microsoft-Img",
    },
    label: "Sign In With Microsoft",
  },
};

const LoginButton = ({ provider }) => {
  return (
    <button className="socialButton">
      <Image {...providers[provider].img} />
      Sign up with Google
    </button>
  );
};

export default LoginButton;
