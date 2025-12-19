import React from "react";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProjects from "../components/OurProjects";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Consultation, design, and marketing offerings crafted to maximize
            your property's value.
          </p>
        </div>
      </main>
      <WhyChooseUs />
      <OurProjects />
      <CTASection />
      <Footer />
    </div>
  );
}
