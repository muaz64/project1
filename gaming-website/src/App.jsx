
import './App.css';
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GamesCarousel from "./components/GamesCarousel";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Chat from "./components/Chat";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-deepBlue">
      <Header />
      <HeroSection />
      <GamesCarousel />
      <Reviews />
      <FAQ />
      <Chat />
      <About />
      <Footer />
    </div>
  );
};

export default App;
