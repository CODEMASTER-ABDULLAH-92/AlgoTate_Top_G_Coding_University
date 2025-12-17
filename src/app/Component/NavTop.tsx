"use client";
import React from "react";

const NavTop = () => {
  return (
    <div className="w-full cursor-pointer bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-b border-blue-500/20 overflow-hidden relative py-3">
      {/* Marquee Container */}
      <div className="flex items-center gap-0 relative">
        {/* First Loop */}
        <div className="flex animate-marquee whitespace-nowrap py-1">
          <span className="mx-8 text-base md:text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text ">
            🚀<span className="text-transparent"> This course is just 3% of your semester fee • It`s on you: Stay in the Matrix or Break the Matrix</span> 💥 •
          </span>
        </div>

        {/* Second Loop for seamless scroll */}
        <div className="flex animate-marquee2 absolute top-0 whitespace-nowrap py-1">
          <span className="mx-8 text-base md:text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text ">
            🚀<span className="text-transparent"> This course is just 3% of your semester fee • It`s on you: Stay in the Matrix or Break the Matrix</span> 💥 •

          </span>
        </div>
      </div>

      {/* Marquee Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee2:hover {
          // animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NavTop;
