"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Design from "./Design";
import We from "./We";
import Develop from "./Develop";
import Brand from "./Brand";

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="group h-screen w-screen">
            {" "}
            <We />
          </div>{" "}
          <div className="group h-screen w-screen">
            {" "}
            <Develop />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Brand />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
