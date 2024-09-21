import Link from "next/link";
import React from "react";
import { CardStack } from "../ui/card-stack";
import { CardStack3 } from "../ui/card-stack3";
const CARDS = [
  {
    id: 0,
    src: "/images/11.svg",
  },
  {
    id: 1,
    src: "/images/9.svg",
  },
];
const Brand = () => {
  return (
    <div className="euclid lg:px-20 px-8 mx-auto max-w-7xl flex flex-col items-center justify-center gap-10 my-20">
      <h2 className="lg:text-7xl text-4xl">
        We design, develop & <span className="text-[#B50DDF]">brand</span>
      </h2>
      <p>
        In the realm of branding, Hypeworx excels in building strong, memorable
        brand identities. Our services include brand strategy, logo design, and
        brand collateral, ensuring every element aligns with the brand&#39;s
        vision and values. From concept to execution, we create cohesive and
        impactful branding that resonates with the target audience and
        strengthens brand presence.
      </p>
      <Link href="/works">
        <button className="px-10 text-[var(--primary-yellow)] bg-black rounded-full py-6">
          See works
        </button>
      </Link>
      <div className="h-40 lg:h-96 w-full">
        <CardStack3 items={CARDS} />
      </div>
    </div>
  );
};

export default Brand;
