"use client";
import { Poppins } from "next/font/google";
import React from "react";
import Testimonial from "../cards/Testimonial";
import { motion } from "framer-motion";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const data = [
  {
    user: "/images/21.svg",
    name: "Savannah Nguyen",
    desig: "Student",
    desc: "Inovact Social helped me find the perfect co-founders for my startup idea. The platform is intuitive and really efficient.",
  },
  {
    user: "/images/22.svg",
    name: "Savannah Nguyen",
    desig: "Student",
    desc: "Love how easy it is to join teams on Inovact Social. It’s perfect for anyone looking to bring their ideas to life without the usual hassle.",
  },
  {
    user: "/images/23.svg",
    name: "Savannah Nguyen",
    desig: "Student",
    desc: "Inovact Social is a lifesaver for project collaboration! It’s incredibly user-friendly and connects you with talented individuals in no time.",
  },
  {
    user: "/images/24.svg",
    name: "Savannah Nguyen",
    desig: "Student",
    desc: "This platform is a game-changer for entrepreneurs! It simplifies finding co-founders and building a credible profile. Super efficient and easy to use!",
  },
  {
    user: "/images/25.svg",
    name: "Savannah Nguyen",
    desig: "Student",
    desc: "Inovact Social saved me so much time. No more tedious convincing and verifying. Just a few clicks, and I was part of an amazing team. Love it!",
  },
  {
    user: "/images/26.svg",
    name: "Savannah Nguyen",
    desig: "Student",
    desc: "Innovact Social is fantastic for connecting with like-minded individuals globally. Joining teams with a click and earning points for interactions is a huge plus!",
  },
];
const Wall = () => {
  return (
    <div className="my-20 flex flex-col gap-10 items-center justify-center px-8 mx-auto max-w-7xl">
      <div
        className={`${poppins.className} text-xl bg-[#1649FF] text-white flex gap-4 rounded-full px-8 py-2 items-center`}
      >
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5013 28.7831L14.568 27.0231C7.7013 20.7964 3.16797 16.6897 3.16797 11.6497C3.16797 7.54307 6.39464 4.31641 10.5013 4.31641C12.8213 4.31641 15.048 5.39641 16.5013 7.10307C17.9546 5.39641 20.1813 4.31641 22.5013 4.31641C26.608 4.31641 29.8346 7.54307 29.8346 11.6497C29.8346 16.6897 25.3013 20.7964 18.4346 27.0364L16.5013 28.7831Z"
            fill="white"
          />
        </svg>
        Wall of Love
      </div>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {data.map((item, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            key={index}
            className=" col-span-1"
          >
            {" "}
            <Testimonial data={item} key={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wall;
