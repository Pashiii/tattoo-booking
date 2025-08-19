import React from "react";
import Header from "../assets/images/header.jpg";

const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-screen bg-fixed "
      style={{
        backgroundImage: `url(${Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50  w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl text-white font-extrabold uppercase font-righteous">
          Welcome to Our Tattoo Shop
        </h1>
        <h1 className="text-2xl text-white mt-2 text-center">
          Your journey to self-expression starts here
        </h1>
        <div className="mt-5 space-x-4">
          <button className="p-5 text-white border-1 font-bold hover:bg-amber-700 hover:border-amber-700 transition-colors duration-300">
            BOOK NOW
          </button>
          <a
            href="#what-offer"
            className="inline-block p-5 text-white border-1 font-bold hover:bg-amber-700 hover:border-amber-700 transition-colors duration-300"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
