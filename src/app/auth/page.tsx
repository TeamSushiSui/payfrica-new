"use client";

import { useAuthCallback } from "@mysten/enoki/react";
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function Page() {
  const { handled } = useAuthCallback();

  useEffect(() => {}, [handled]);

  return <Loading />;
}
