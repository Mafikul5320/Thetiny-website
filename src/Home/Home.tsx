import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import PopularLinks from "./PopularLinks";
import PremiumFeatures from "./PremiumFeatures";
import PricingSection from "./PricingSection";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <PopularLinks />
      <PremiumFeatures />
      <PricingSection />
      <Testimonials />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
