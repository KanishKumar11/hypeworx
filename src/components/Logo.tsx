import Link from "next/link";
import React from "react";
const Logo = () => {
  return (
    <div className="lg:text-2xl text-lg text-[var(--primary-yellow)] hover:scale-105 transition-transform ease-in-out hover:-translate-y-1">
      <Link href="/">Hypeworx</Link>
    </div>
  );
};

export default Logo;
