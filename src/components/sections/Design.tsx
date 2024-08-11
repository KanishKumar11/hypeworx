import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Design = () => {
  return (
    <div className="overflow-x-clip">
      <h2
        className={`${poppins.className} -translate-x-20  text-[#DEE2E6] font-semibold text-nowrap max-w-[100vw] s lg:text-balance lg:text-8xl text-5xl mb-40 text-center mx-auto `}
      >
        Design Development Brand
      </h2>
      <div className="mx-auto max-w-7xl"></div>
    </div>
  );
};

export default Design;
