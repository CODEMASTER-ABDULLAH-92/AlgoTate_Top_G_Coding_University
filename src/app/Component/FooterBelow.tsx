import React from "react";

const FooterBelow = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
      {/* Marquee Container */}
      <div className="flex items-center gap-5">
        {/* First Loop */}
        <div className=" animate-marquee_book py-12 whitespace-nowrap">
          <span className="mx-4 font-extrabold text-7xl md:text-8xl tracking-wider text-black">
           | AlgoTate | DSA | FRONTEND | BACKEND
          </span>
        </div>

        {/* Second Loop for Seamless Scroll */}
        <div className=" animate-marquee2_book  absolute py-12 whitespace-nowrap">
          <span className="mx-4 font-extrabold text-7xl md:text-8xl tracking-wider text-black">
           | AlgoTate | DSA | FRONTEND | BACKEND
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterBelow;
