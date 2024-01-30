import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import AboutSummary from "../components/AboutSummary";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Highlights />
      <Testimonials />
      <AboutSummary />
    </main>
  );
};

export default HomePage;
