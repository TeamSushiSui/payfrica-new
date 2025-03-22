import Balances from "./components/Balances";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";
import SavingsSection from "./components/SavingsSection";
import SendMoneyOverlay from "./components/SendMoneyOverlay";
import TransactionsHistory from "./components/TransactionsHistory";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Balances />
      <QuickActions />
      <SavingsSection />
      <TransactionsHistory />
      <SendMoneyOverlay />
    </div>
  );
}
