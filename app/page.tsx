import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import CTAsection from "@/app/components/CTAsection";
import Footer from "@/app/components/Footer";

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
