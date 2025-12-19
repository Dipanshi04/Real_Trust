import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProjects from "../components/OurProjects";
import PhotoGallery from "../components/PhotoGallery";
import HappyClients from "../components/HappyClients";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurProjects />
      <PhotoGallery />
      <HappyClients />
      <CTASection />
      <Footer />
    </div>
  );
}
