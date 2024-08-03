"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SubHead from "../SubHead";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length + 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // const backgroundColors = [
  //   "var(--slate-900)",
  //   "var(--black)",
  //   "var(--neutral-900)",
  // ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className=" overflow-y-auto overflow-x-hidden flex items-center flex-col justify-center relative space-x-10 rounded-md max-w-[1550px] p-10 lg:p-0"
      ref={ref}
    >
      <SubHead />
      <div className="">
        <Image
          src="/images/1.svg"
          alt=""
          width={130}
          height={80}
          className="absolute left-[17%]"
        />
        <Image
          src="/images/2.svg"
          alt=""
          width={250}
          height={200}
          className="absolute -left-[3%] top-[20%] z-10"
        />
        <Image
          src="/images/3.svg"
          alt=""
          width={160}
          height={250}
          className="absolute -left-[0%] bottom-[24%] z-10"
        />
        <Image
          src="/images/4.svg"
          alt=""
          width={180}
          height={150}
          className="absolute left-[13%] bottom-[26%] z-0"
        />
        <Image
          src="/images/5.svg"
          alt=""
          width={150}
          height={150}
          className="absolute right-[3%] top-[6%] z-0"
        />
        <Image
          src="/images/6.svg"
          alt=""
          width={300}
          height={250}
          className="absolute -right-[3%] top-[20%] z-0"
        />
        <Image
          src="/images/7.svg"
          alt=""
          width={300}
          height={250}
          className="absolute -right-[3%] bottom-[26%] z-0"
        />
      </div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-black text-4xl max-w-2xl mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
