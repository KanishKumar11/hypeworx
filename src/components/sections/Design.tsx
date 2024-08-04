import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Design = () => {
  return (
    <div className="">
      <h2
        className={`${poppins.className} text-[#DEE2E6] font-semibold text-balance lg:text-8xl text-5xl mb-40 text-center mx-auto `}
      >
        Design Development Brand
      </h2>
      <div className="mx-auto max-w-7xl"></div>
    </div>
  );
};

export default Design;
