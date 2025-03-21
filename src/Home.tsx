import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { FeaturedContent } from "@/components/layout/FeaturedContent";
import { Footer } from "@/components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero />

        {/* Featured insights section */}
        <FeaturedContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
