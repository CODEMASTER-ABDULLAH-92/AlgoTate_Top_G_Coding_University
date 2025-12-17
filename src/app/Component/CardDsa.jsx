"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CardDsa = ({
  minHeadding,
  heading,
  description,
  lessons,
  exeLink,
  url,
}) => {
  const location = usePathname();
  return (
    <div className="max-w-[360px] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-[2px] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="bg-gray-900 rounded-xl h-full flex flex-col justify-between overflow-hidden">
        {/* Header with gradient accent */}
        <div className="relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-purple-800/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Floating particles/glow effect */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full filter blur-[80px] opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-400 rounded-full filter blur-[60px] opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

          {/* Card top content */}
          <div className="relative h-[200px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/30 backdrop-blur-sm">
            {/* Main heading with dynamic gradient */}
            <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-text-shine">
              {minHeadding}
            </span>

            {/* Badges with glass morphism effect */}
            <div className="absolute bottom-1 left-6 flex gap-2">
              {location === "/" ? (
                ""
              ) : (
                <Link
                  href={exeLink}
                  className="bg-gray-900/80 cursor-pointer text-white px-4 py-1.5 rounded-full text-xs font-medium border border-blue-500/30 backdrop-blur-md shadow-sm hover:bg-gray-800/90 transition-all duration-300 flex items-center gap-1"
                >
                  <span className="w-3 cursor-pointer h-3 bg-green-500 rounded-full duration-500 animate-pulse"></span>
                  Exercise
                </Link>
              )}

              {/* Free Tag */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold border border-green-400/30 backdrop-blur-md shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                FREE
              </div>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {heading}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Footer with action */}
          <div className="mt-auto flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center text-gray-400 text-xs group-hover:text-blue-300 transition-colors duration-300">
              <svg
                className="w-4 h-4 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>{lessons}</span>
            </div>

            <Link
              href={url}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-400/50 group/btn"
            >
              Start Learning
              <svg
                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cyber grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.02)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.02)_25px,transparent_26px)] bg-[size:40px_40px] pointer-events-none rounded-xl"></div>

        {/* Bottom scan line effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
      </div>

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
          animation: text-shine 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CardDsa;
