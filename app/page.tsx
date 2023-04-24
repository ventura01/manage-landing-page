import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTAsection from "@/components/CTAsection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials text="" name="" image=""/>
      <CTAsection />
      <Footer />
    </main>
  );
}
