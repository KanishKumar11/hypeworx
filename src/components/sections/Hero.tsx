"use client";
import React from "react";
import SubHead from "../SubHead";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const Hero = () => {
  const heading =
    "Launching your vision into a masterpiece, one pixel at a time";
  const subHeading = "An premium agency for design development & branding";
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };
  const headingWords = heading.split(" ");
  const subHeadingWords = subHeading.split(" ");
  return (
    <div className="mx-auto xl:my-10 p-5 max-w-7xl flex flex-col items-center  justify-center gap-5 text-center">
      <SubHead />
      <motion.h1
        className="pp text-white font-light lg:text-7xl  text-[28px] leading-[34px] text-balance mx-auto w-auto mt-12"
        initial="hidden"
        animate="visible"
      >
        {" "}
        {headingWords.map((word, i) => (
          <motion.span key={word} variants={wordVariants} custom={i}>
            {word}{" "}
          </motion.span>
        ))}{" "}
      </motion.h1>
      <motion.h2
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className={`${poppins.className} text-white lg:text-lg text-base`}
      >
        {" "}
        {subHeadingWords.map((word, i) => (
          <motion.span key={word} variants={wordVariants} custom={i}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.h2>
      <div className="">
        <Image src="/hero.svg" alt="" width={800} height={800} />
      </div>
    </div>
  );
};

export default Hero;
