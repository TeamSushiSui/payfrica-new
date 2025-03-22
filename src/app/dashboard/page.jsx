"use client"
import Balances from "../components/Balances";
import Navbar from "../components/Navbar";
import QuickActions from "../components/QuickActions";
import { useCustomWallet } from "@/contexts/CustomWallet";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();
  const { isConnected, logout, redirectToAuthUrl, emailAddress, address } =
    useCustomWallet();
    if (!isConnected) {
      router.push("/login");
      return null;
    }
  return (
    <div>
      <Navbar />
      <Balances />
      <QuickActions />
    </div>
  );
}
