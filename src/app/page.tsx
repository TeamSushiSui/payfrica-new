// import Balances from "./components/Balances";
// import Navbar from "./components/Navbar";
// import QuickActions from "./components/QuickActions";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <Balances />
//       <QuickActions />
//     </div>
//   );
// }
import PayfricaBridge from "./components/landingPage/bridge/bridge";
import CAllToAction from "./components/landingPage/call-to-action/call-to-action";
import FeaturesSection from "./components/landingPage/features/features";
import Footer from "./components/landingPage/footer/footer";
import HeroSection from "./components/landingPage/hero/hero-section";
import Offers from "./components/landingPage/offers/offers";
import PayfricaSavings from "./components/landingPage/saving/saving";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <PayfricaBridge />
      <PayfricaSavings />
      <Offers />
      <CAllToAction />
      <Footer />
    </main>
  );
}
