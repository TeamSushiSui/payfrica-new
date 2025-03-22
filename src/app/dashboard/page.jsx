
"use client";
import Balances from "./components/Balances";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";
import SavingsSection from "./components/SavingsSection";
import SendMoneyOverlay from "./components/SendMoneyOverlay";
import TransactionsHistory from "./components/TransactionsHistory";
import DepositPage from "./deposit/page";
import { useState } from "react";
import { useCustomWallet } from "@/contexts/CustomWallet";
import { useRouter } from "next/navigation"; 

export default function Home() {
  // const [showDepositPage, setShowDepositPage] = useState(false);
  // const router = useRouter();
  // const { isConnected, logout, redirectToAuthUrl, emailAddress, address } =
  //   useCustomWallet();
  //   if (!isConnected) {
  //     router.push("/login");
  //     return null;
  //   }
  return (
    <div>
      <Navbar />
      <Balances />
      <QuickActions />
      <SavingsSection />
      <TransactionsHistory />
      <SendMoneyOverlay />
      <div>
        <button onClick={() => setShowDepositPage(true)}>
          Open Deposit Page
        </button>
        {showDepositPage && (
          <DepositPage onClose={() => setShowDepositPage(false)} />
        )}
      </div>
    </div>
  );
}