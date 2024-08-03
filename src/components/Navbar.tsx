"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";

const Navbar = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="bg-black text-white flex gap-5 justify-between items-center max-w-7xl mx-auto lg:px-20 px-8 py-5"
    >
      <motion.div className="" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Logo />
      </motion.div>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex gap-10 items-center"
      >
        <div className="flex gap-10">
          <Link href="/work">
            {" "}
            <div className="hover:scale-105 transition-transform ease-in-out hover:-translate-y-1">
              Work
            </div>
          </Link>
          <Link href="/about">
            <div className="hover:scale-105 transition-transform ease-in-out hover:-translate-y-1">
              About
            </div>
          </Link>
        </div>
        <Link href="/contact">
          {" "}
          <Button
            borderRadius="9999px"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="text-black bg-[var(--primary-yellow)] hover:bg-yellow-500 px-10 py-4 font-semibold rounded-full transition-colors ease-in-out hover:text-slate-800">
              Contact us
            </div>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
