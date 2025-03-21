import Balances from "./components/Balances";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Balances />
      <QuickActions />
    </div>
  );
}
