import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Brand from "@/components/sections/Brand";
import Clients from "@/components/sections/Clients";
import Design from "@/components/sections/Design";
import Develop from "@/components/sections/Develop";
import Hero from "@/components/sections/Hero";
import HorizontalScroll from "@/components/sections/HorizontalScroll";
import Rotated from "@/components/sections/Rotated";
import { StickyScrollAnimation } from "@/components/sections/StickyScrollAnimation";
import Wall from "@/components/sections/Wall";
import We from "@/components/sections/We";
import Works from "@/components/sections/Works";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-black overflow-x-hidden">
        {" "}
        <Navbar />
        <Hero />
      </div>
      <div className="overflow-x-clip">
        {" "}
        <Rotated />
      </div>{" "}
      <StickyScrollAnimation />
      <Design />
      <HorizontalScroll />
      <Clients />
      <Works />
      <Wall />
      <Footer />
    </div>
  );
};

export default page;
