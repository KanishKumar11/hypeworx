import Link from "next/link";
import React from "react";
import { CardStack } from "../ui/card-stack";
const CARDS = [
  {
    id: 0,
    src: "/images/8.svg",
  },
  {
    id: 1,
    src: "/images/9.svg",
  },
];
const We = () => {
  return (
    <div className="euclid lg:px-20 px-8 mx-auto max-w-7xl flex flex-col items-center justify-center gap-10 my-20">
      <h2 className="lg:text-7xl text-4xl">
        We <span className="text-[#FF4100]">design</span>, develop & brand
      </h2>
      <p>
        In the realm of design, Hypework excels in creating visually stunning,
        user-centric interfaces. Our services include UI/UX design, graphic
        design, and visual branding, ensuring every touchpoint reflects the
        brand&#39;s essence. From concept to execution, we focus on crafting
        intuitive and aesthetically pleasing designs that enhance user
        experience and drive business success.
      </p>
      <Link href="">
        <button className="px-10 text-[var(--primary-yellow)] bg-black rounded-full py-6">
          See works
        </button>
      </Link>
      <div className="h-40 lg:h-96 w-full">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
};

export default We;
