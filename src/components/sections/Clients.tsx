import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 lg:px-20 p-8 flex flex-col gap-16 items-center justify-center">
      <h2 className="euclid bg-clip-text bg-gradient-to-r text-transparent text-center from-[#002642] to-[#0061A8] text-6xl">
        Our clients love us & we do too :)
      </h2>
      <Image
        src="/images/12.svg"
        alt=""
        width="800"
        height="40"
        className="h-12"
      />
      <div className="bg-[#74B8FB] text-[#021F3B] px-6 py-16 -rotate-6 -mt-20 rounded-sm w-72 euclid text-sm self-start">
        “Our Vision is to provide participants with comprehensive guidance and
        support throughout their job search journey, and to enhance
        participants’ employability by improving their job search skills,
        interview techniques, and resume writing abilities
      </div>
    </div>
  );
};

export default Clients;
