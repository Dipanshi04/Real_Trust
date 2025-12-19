import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <AboutUs />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
