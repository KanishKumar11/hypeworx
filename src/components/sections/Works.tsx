"use client";
import React from "react";
import SubHead from "../headings/SubHead2";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
const Items = [
  "UI/UX Design",
  "Graphic Design",
  "Visual Branding",
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "Brand Strategy",
  "Logo Design",
  "Brand Collateral",
  "Digital Marketing",
  "Social Media Management",
  "E-commerce Solutions",
  "Content Creation",
  "Product Prototyping",
];
const mobItems = [
  "UI/UX Design",
  "Graphic Design",
  "Brand Strategy",
  "Product Prototyping",
  "Social Media Management",
  "Logo",
  "Visual Branding",
  "Social Media",
];
const images = [
  "/images/13.svg",
  "/images/14.svg",
  "/images/15.svg",
  "/images/16.svg",
  "/images/17.svg",
  "/images/18.svg",
  "/images/19.svg",
  "/images/20.svg",
];
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const Works = () => {
  return (
    <div
      className={`${poppins.className} my-20 flex gap-5 flex-col lg:px-20 px-8`}
    >
      <SubHead />
      <div
        className={`${poppins.className} font-medium lg:text-lg text-[10px] lg:flex hidden lg:gap-5 gap-2 flex-row flex-wrap items-center justify-center`}
      >
        {Items.map((item, idx) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="bg-[#BBFEFB] sm:w-auto w-[45%] text-center text-[#012742] rounded-xl lg:px-8 px-4 lg:py-5 py-4"
            key={idx}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <div
        className={`${poppins.className} font-medium lg:text-lg text-[10px] flex lg:hidden lg:gap-5 gap-2 flex-row flex-wrap items-center justify-center`}
      >
        {mobItems.map((item, idx) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="bg-[#BBFEFB] sm:w-auto text-center text-[#012742] rounded-xl lg:px-8 px-7 lg:py-5 py-3"
            key={idx}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <div
        className={`${poppins.className} max-w-3xl w-full mx-auto bg-[#F3F3F3] rounded-xl py-4 px-10 flex gap-5 items-center justify-between`}
      >
        {" "}
        <div className="text-[#050401] lg:text-xl text-base font-medium">
          Know us what you wanna build
        </div>{" "}
        <div className="">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.550781"
              width="48"
              height="48"
              rx="8"
              fill="#1649FF"
            />
            <path
              d="M13.394 35.7515L36.6607 25.7781C37.7407 25.3115 37.7407 23.7915 36.6607 23.3248L13.394 13.3515C12.514 12.9648 11.5407 13.6181 11.5407 14.5648L11.5273 20.7115C11.5273 21.3781 12.0207 21.9515 12.6873 22.0315L31.5273 24.5515L12.6873 27.0581C12.0207 27.1515 11.5273 27.7248 11.5273 28.3915L11.5407 34.5381C11.5407 35.4848 12.514 36.1381 13.394 35.7515Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center my-20">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
          >
            <Image src={image} alt="" loading="lazy" width="500" height="500" />
          </motion.div>
        ))}
      </div>
      <Link href="/works">
        <div className="bg-black text-[var(--primary-yellow)] w-full lg:text-9xl text-5xl rounded-full lg:px-20 px-10 text-center lg:py-16 py-10">
          Explore works
        </div>
      </Link>
    </div>
  );
};

export default Works;
