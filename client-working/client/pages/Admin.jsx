import React from "react";
import Header from "../components/Header";
import ClientsAdmin from "../components/admin/ClientsAdmin";
import ContactsAdmin from "../components/admin/ContactsAdmin";
import ProjectsAdmin from "../components/admin/ProjectsAdmin";
import SubscribersAdmin from "../components/admin/SubscribersAdmin";
import Footer from "../components/Footer";

export default function Admin() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          <ClientsAdmin />
          <ContactsAdmin />
          <ProjectsAdmin />
          <SubscribersAdmin />
        </div>
      </main>
      <Footer />
    </div>
  );
}
