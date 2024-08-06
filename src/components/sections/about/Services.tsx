import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const design = ["/images/37.svg", "/images/38.svg", "/images/39.svg"];
const Services = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-5 relative">
        <h1 className="lg:text-9xl text-6xl font-light pp">Design</h1>

        <p className={`${poppins.className} lg:text-2xl text-lg`}>
          At Hypework, we specialize in creating visually stunning, user-centric
          designs. Our services include UI/UX design, graphic design, and visual
          branding, ensuring every touchpoint reflects your brand&#39;s essence.
          From concept to execution, our designers craft intuitive,
          aesthetically pleasing, and functional designs that enhance user
          experience and drive business success. Trust Hypework to bring your
          vision to life with creativity and precision.
        </p>
        <div className="text-white px-10 py-4 bg-black rounded-xl font-bold w-max mb-10">
          Explore works
        </div>
        <div className="h-96 relative">
          <InfiniteMovingCards direction="left" speed="slow" items={design} />
          <div className="">
            <Image
              src="/images/35.svg"
              alt=""
              width={100}
              height={60}
              className="-top-10 left-1/4 absolute"
            />
            <Image
              src="/images/36.svg"
              alt=""
              width={100}
              height={60}
              className="top-0 right-10 absolute"
            />
            <Image
              src="/images/40.svg"
              alt=""
              width={100}
              height={60}
              className="bottom-0 left-10 absolute"
            />
          </div>
        </div>
        <div className="bg-[#74B8FB] text-[#021F3B] px-6 lg:py-16 py-10 -rotate-6 lg:-mt-20 rounded-sm lg:w-72 w-64 euclid text-sm self-start absolute -top-72 lg:-top-28 right-8">
          “Our Vision is to provide participants with comprehensive guidance and
          support throughout their job search journey, and to enhance
          participants’ employability by improving their job search skills,
          interview techniques, and resume writing abilities
        </div>
      </div>
      <div className="flex flex-col gap-5 relative">
        <h1 className="lg:text-9xl text-6xl font-light pp">Development</h1>

        <p className={`${poppins.className} lg:text-2xl text-lg`}>
          At Hypework, we specialize in creating visually stunning, user-centric
          designs. Our services include UI/UX design, graphic design, and visual
          branding, ensuring every touchpoint reflects your brand&#39;s essence.
          From concept to execution, our designers craft intuitive,
          aesthetically pleasing, and functional designs that enhance user
          experience and drive business success. Trust Hypework to bring your
          vision to life with creativity and precision.
        </p>
        <div className="text-white px-10 py-4 bg-black rounded-xl font-bold w-max mb-10">
          Explore works
        </div>
        <div className="h-96 relative">
          <InfiniteMovingCards direction="left" speed="slow" items={design} />
          <div className="">
            <Image
              src="/images/35.svg"
              alt=""
              width={100}
              height={60}
              className="-top-10 left-1/4 absolute"
            />
            <Image
              src="/images/36.svg"
              alt=""
              width={100}
              height={60}
              className="top-0 right-10 absolute"
            />
            <Image
              src="/images/40.svg"
              alt=""
              width={100}
              height={60}
              className="bottom-0 left-10 absolute"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 relative">
        <h1 className="lg:text-9xl text-6xl font-light pp">Branding</h1>

        <p className={`${poppins.className} lg:text-2xl text-lg`}>
          At Hypework, we specialize in creating visually stunning, user-centric
          designs. Our services include UI/UX design, graphic design, and visual
          branding, ensuring every touchpoint reflects your brand&#39;s essence.
          From concept to execution, our designers craft intuitive,
          aesthetically pleasing, and functional designs that enhance user
          experience and drive business success. Trust Hypework to bring your
          vision to life with creativity and precision.
        </p>
        <div className="text-white px-10 py-4 bg-black rounded-xl font-bold w-max mb-10">
          Explore works
        </div>
        <div className="h-96 relative">
          <InfiniteMovingCards direction="left" speed="slow" items={design} />
          <div className="">
            <Image
              src="/images/35.svg"
              alt=""
              width={100}
              height={60}
              className="-top-10 left-1/4 absolute"
            />
            <Image
              src="/images/36.svg"
              alt=""
              width={100}
              height={60}
              className="top-0 right-10 absolute"
            />
            <Image
              src="/images/40.svg"
              alt=""
              width={100}
              height={60}
              className="bottom-0 left-10 absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
