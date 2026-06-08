import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import AgeGroups from "@/components/AgeGroups";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Courses />
        <AgeGroups />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
