import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const Testimonial = ({ data }: any) => {
  return (
    <div className="bg-[#EBEFFF] flex flex-col gap-5 rounded-3xl w-full  p-8 flex-auto">
      <div className="flex gap-3 items-center">
        <div>
          <Image
            src={data.user}
            alt=""
            width={50}
            height={50}
            className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]"
          />
        </div>
        <div className="euclid">
          <div className="lg:text-2xl text-base">{data.name}</div>
          <div className={`${poppins.className} lg:text-xl text-sm`}>
            {data.desig}
          </div>
        </div>
      </div>
      <div className={`${poppins.className} lg:text-base text-xs`}>
        &#34;{data.desc}&#34;
      </div>
    </div>
  );
};

export default Testimonial;
