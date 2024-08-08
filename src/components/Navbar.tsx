"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = ({ dark }: { dark?: any }) => {
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
      className={` ${
        dark ? "text-black" : "text-white"
      } flex gap-5 justify-between items-center w-full max-w-7xl mx-auto lg:px-20 px-8 py-5`}
    >
      <motion.div className="" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Logo />
      </motion.div>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex sm:gap-10 gap-2 items-center"
      >
        <div className="sm:flex hidden gap-10">
          <Link href="/our-works">
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
            className={`bg-white ${
              dark ? "bg-slate-100" : "bg-slate-900"
            } text-black dark:text-white  border-neutral-200 dark:border-slate-800`}
          >
            <div className="text-black bg-[var(--primary-yellow)] hover:bg-yellow-500 lg:px-10 px-6  lg:py-4 py-3 font-semibold rounded-full transition-colors ease-in-out hover:text-slate-800">
              Contact us
            </div>
          </Button>
        </Link>
        <div className="sm:hidden block">
          <Sheet>
            <SheetTrigger>
              {" "}
              <Menu />
            </SheetTrigger>
            <SheetContent className=" bg-slate-100 border-l-0">
              <SheetHeader>
                <SheetDescription className="py-10">
                  <div className="flex flex-col justify-start items-start text-xl  text-neutral-900 gap-10">
                    <Link href="/our-works">
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
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
