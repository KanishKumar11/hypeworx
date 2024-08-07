import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/our-works/Hero";
import StickyScroll from "@/components/sections/our-works/StickyScroll";
import React from "react";
import { content } from "@/lib/data";
import Services from "@/components/sections/our-works/Services";
import Description from "@/components/sections/our-works/Description";
const page = () => {
  return (
    <>
      <div className="bg-[url('/images/32.svg')] bg-cover h-screen overflow-x-hidden relative">
        <Navbar />
        <div className="max-w-7xl mx-auto overflow-x-hidden">
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-20">
        <StickyScroll content={content} />
        <Services />
        <Description />
      </div>
      <Footer />
    </>
  );
};

export default page;
