import React from "react";
import Hero from "./Hero";
import BG from "../assets/Background.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="h-screen bg-cover bg-center -mt-18 text-white"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <Navbar/>
      <Hero />
    </div>
  );
};

export default Header;