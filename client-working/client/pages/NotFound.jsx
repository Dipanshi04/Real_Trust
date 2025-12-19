import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">404</h1>
        <p className="text-gray-600 text-lg">
          The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-md hover:bg-[#2563EB] transition-colors font-semibold"
        >
          Back to Home
        </a>
      </main>
      <Footer />
    </div>
  );
}
