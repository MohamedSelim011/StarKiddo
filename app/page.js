import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SummerCamp from "@/components/SummerCamp";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import AgeGroups from "@/components/AgeGroups";
import Testimonials from "@/components/Testimonials";
import PhotoCarousel from "@/components/PhotoCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SummerCamp />
        <WhyUs />
        <Courses />
        <AgeGroups />
        <Testimonials />
        <PhotoCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
