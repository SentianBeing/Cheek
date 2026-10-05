import React from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import PhilosophyBanner from "./components/PhilosophyBanner";
import ImageContentCards from "./components/ImageContentCards";
import SocialCarousel from "./components/SocialCarousel";
import ValuesTabs from "./components/ValuesTabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        backgroundColor: "var(--c-white)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <PhilosophyBanner />
        <ImageContentCards />
        <SocialCarousel />
        <ValuesTabs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
