
import React from "react";
import BgImg from "../assets/Fortnite-Transparent-Isolated-Background.png";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-deepBlue via-blue-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-5">
          <h6 className="text-lg uppercase">#1 Trending</h6>
          <h3 className="text-2xl">Epic Games</h3>
          <h1 className="text-5xl font-bold">FORTNITE</h1>
          <p className="text-gray-300">Fortnite is an online video game developed by Epic Games and released in 2017.</p>
          <button className="bg-green-500 px-5 py-3 rounded mt-5">Play Now</button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src={BgImg} alt="Fortnite" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
