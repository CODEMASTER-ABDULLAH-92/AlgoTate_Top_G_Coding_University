"use client"
import React from "react";

const Heading = ({ Heading }) => {
  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-xl rounded-full scale-110"></div>
      
      {/* Main heading */}
      <p className="relative lg:text-6xl md:text-4xl text-2xl pt-4 font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-text-shine px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 lg:my-8">
        {Heading}
      </p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

      <style jsx>{`
        @keyframes text-shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Heading;