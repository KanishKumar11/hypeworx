"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import SubHead from "@/components/SubHead";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const Hero = () => {
  const heading = "Transforming Ideas into Digital Masterpieces";
  const subHeading = "An premium agency for design development & branding";
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };
  const headingWords = heading.split(" ");
  const subHeadingWords = subHeading.split(" ");
  return (
    <div className="mx-auto  my-10 p-5 max-w-7xl flex flex-col items-center   justify-center gap-5 text-center">
      <SubHead />
      <motion.h1
        className="pp text-white font-light lg:text-[6vw] lg:leading-[1.1]  text-[28px] tracking-wide leading-[34px] text-balance mx-auto w-auto mt-12 z-10 shadow-xl"
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
      <div className="bg-white px-10 py-4 text-black rounded-xl font-bold">
        Explore works
      </div>
      <div className="overflow-hidden z-0">
        <Image
          src="/images/33.svg"
          alt=""
          width={300}
          height={250}
          className="absolute -right-20 top-28 lg:w-[300px] w-[180px]"
        />
        <Image
          src="/images/30.svg"
          alt=""
          width={300}
          height={250}
          className="absolute lg:-left-28 top-28 lg:-rotate-12 lg:w-[300px] w-[180px] -rotate-[20deg] -left-20"
        />
        <Image
          src="/images/4.svg"
          alt=""
          width={150}
          height={150}
          className="absolute lg:left-28 bottom-28 left-14 "
        />{" "}
        <Image
          src="/images/34.svg"
          alt=""
          width={150}
          height={150}
          className="absolute lg:right-28 right-14 bottom-28 "
        />
      </div>
    </div>
  );
};

export default Hero;
