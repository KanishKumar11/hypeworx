import Image from "next/image";
import React from "react";

const Rotated = () => {
  return (
    <div className="w-full flex items-center justify-center gap-10 mx-auto overflow-hidden -rotate-[1.5deg] -mt-16 py-4 bg-[#eeeeee] euclid text-3xl">
      We design brand & devlop or stuff like that :)
      <Image src="/images/rotated.svg" alt="" width={60} height={60} />
    </div>
  );
};

export default Rotated;
