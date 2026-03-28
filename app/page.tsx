import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import StudyMaterial from "./components/StudyMaterial";
import TestSeries from "./components/TestSeries";
import CurrentAffairs from "./components/CurrentAffairs";
import Toppers from "./components/Toppers";
import Faculty from "./components/Faculty";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <WhyUs />
      <StudyMaterial />
      <TestSeries />
      <CurrentAffairs />
      <Toppers />
      <Faculty />
      <Contact />
      <Footer />
    </main>
  );
}
