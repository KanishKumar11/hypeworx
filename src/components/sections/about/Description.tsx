import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const items = [
  {
    imgUrl: "/images/37.svg",
    title: "Textile flow",
    description: "Product design",
  },
  {
    imgUrl: "/images/37.svg",
    title: "Textile flow",
    description: "Product design",
  },
  {
    imgUrl: "/images/37.svg",
    title: "Textile flow",
    description: "Product design",
  },
  {
    imgUrl: "/images/37.svg",
    title: "Textile flow",
    description: "Product design",
  },
  {
    imgUrl: "/images/37.svg",
    title: "Textile flow",
    description: "Product design",
  },
];
const Description = () => {
  return (
    <div className="p-8 flex flex-col gap-10">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-5 items-end">
          <div className="w-[70%]">
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-[25%] ml-10">
            <h3 className="euclid lg:text-4xl text-2xl font-medium">
              {item.title}
            </h3>
            <h4 className={cn(poppins.className, "lg:text-2xl text-xl")}>
              {item.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
