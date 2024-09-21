import Image from "next/image";
import React from "react";
import Marquee from "../ui/marquee";
const images = [
  "/images/brands/1.jpg",
  "/images/brands/2.jpg",
  "/images/brands/3.jpg",
  "/images/brands/4.jpg",
  "/images/brands/5.jpg",
  "/images/brands/6.jpg",
  "/images/brands/7.jpg",
  "/images/brands/8.jpg",
  "/images/brands/9.jpg",
  "/images/brands/10.jpg",
  "/images/brands/11.jpg",
  "/images/brands/12.jpg",
  "/images/brands/13.svg",
  "/images/brands/14.jpg",
  "/images/brands/15.jpg",
  "/images/brands/16.jpg",
  "/images/brands/17.jpg",
  "/images/brands/18.svg",
  "/images/brands/19.svg",
];
const Clients = () => {
  return (
    <div className=" mx-auto my-20 lg:px-20 p-8 flex flex-col gap-16 items-center justify-center">
      <h2 className="euclid bg-clip-text bg-gradient-to-r text-transparent text-center from-[#002642] to-[#0061A8] lg:text-6xl text-4xl">
        Our clients love us & we do too :)
      </h2>
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  -mt-12 ">
        <Marquee pauseOnHover className="[--duration:24s] ">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="aspect-[2/3] flex items-center justify-center mx-4 "
            >
              <Image
                src={img}
                alt=""
                width={200}
                height={200}
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      <div className="bg-[#74B8FB] text-[#021F3B] sm:px-6 py-16 -rotate-6 lg:-mt-20 rounded-sm sm:w-72 w-[70vw] max-sm:mx-auto px-10 euclid text-sm self-start">
        “Our Vision is to provide participants with comprehensive guidance and
        support throughout their job search journey, and to enhance
        participants’ employability by improving their job search skills,
        interview techniques, and resume writing abilities
      </div>
    </div>
  );
};

export default Clients;
