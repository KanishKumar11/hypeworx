import Link from "next/link";
import React from "react";
import { CardStack } from "../ui/card-stack";
import { CardStack2 } from "../ui/card-stack2";
const CARDS = [
  {
    id: 0,
    src: "/images/10.svg",
  },
  {
    id: 1,
    src: "/images/9.svg",
  },
];
const Develop = () => {
  return (
    <div className="euclid lg:px-20 px-8 mx-auto max-w-7xl flex flex-col items-center justify-center gap-10 my-20">
      <h2 className="lg:text-7xl text-4xl">
        We design, <span className="text-[#1649FF]">develop</span> & brand
      </h2>
      <p>
        In the realm of development, Hypeworx specializes in creating robust and
        innovative digital solutions. Our services include web development,
        mobile app development, and custom software development, ensuring each
        product is tailored to meet the unique needs of our clients. From
        initial planning to final deployment, we deliver high-quality, scalable,
        and efficient solutions that drive business growth.
      </p>
      <Link href="/works">
        <button className="px-10 text-[var(--primary-yellow)] bg-black rounded-full py-6">
          See works
        </button>
      </Link>
      <div className="h-40 lg:h-96 w-full">
        <CardStack2 items={CARDS} />
      </div>
    </div>
  );
};

export default Develop;
