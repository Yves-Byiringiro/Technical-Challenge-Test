import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import MissionVisionObjectiveSection from "../components/MissionVisionObjectiveSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoriesUpdatesSection from "../components/StoriesUpdatesSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionObjectiveSection />
      <GallerySection />
      <CallToAction />
      <StoriesUpdatesSection />
      <Footer />        
    </main>
  );
}
