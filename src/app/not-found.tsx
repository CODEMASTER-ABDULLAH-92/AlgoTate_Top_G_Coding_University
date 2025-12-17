"use client";

import { useEffect, useRef, useState } from "react";
import { Home, Terminal, AlertCircle, RefreshCw, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const errorCodes = [
    "404: Page Not Found",
    "ERR_CONNECTION_REFUSED",
    "DNS_PROBE_FINISHED_NXDOMAIN",
    "HTTP 404",
    "ENOTFOUND"
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // GSAP animations
    const tl = gsap.timeline();

    // Staggered text animation
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".error-code", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".floating-element", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "bounce.out"
    }, "-=0.2");

    // Floating animation for particles
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: -30,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
        ease: "sine.inOut"
      });
    });

    // Glitch effect on 404 numbers
    const glitchInterval = setInterval(() => {
      const glitchElements = document.querySelectorAll(".glitch-number");
      glitchElements.forEach((el) => {
        gsap.to(el, {
          x: Math.random() * 8 - 4,
          y: Math.random() * 8 - 4,
          duration: 0.05,
          repeat: 1,
          yoyo: true,
          ease: "none"
        });
      });
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleRefresh = () => {
    setIsAnimating(true);
    router.refresh();
    setTimeout(() => setIsAnimating(false), 1000);
  };


  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px)] bg-[size:60px_60px] opacity-50"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-transparent rounded-full filter blur-3xl animate-pulse-slow delay-500"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-red-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Error Terminal Effect - Adjusted positioning */}
      <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 w-full max-w-2xl z-20">
        <div className="bg-black/70 backdrop-blur-sm border border-red-500/30 rounded-xl p-3 sm:p-4 mx-2 sm:mx-4">
          <div className="flex items-center gap-2 text-red-400 font-mono text-xs sm:text-sm">
            <Terminal size={14} className="sm:size-4" />
            <span>ERROR_TERMINAL:404</span>
            <div className="ml-auto flex gap-1 sm:gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
          <div className="mt-2 font-mono text-[10px] sm:text-xs text-gray-400">
            <div className="text-green-400">{`$ find_page --url "{typeof window !== 'undefined' ? window.location.pathname : '/404'}"`}</div>
            <div className="text-red-400">✗ ERROR: Requested resource not found</div>
            <div className="text-yellow-400">ℹ INFO: Attempting recovery...</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Error Visual - Adjusted sizing */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-950 backdrop-blur-xl border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-500/10 overflow-hidden">
              {/* Broken circuit effect */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#eab308" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50,200 Q200,50 350,200 Q200,350 50,200"
                    fill="none"
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    strokeDasharray="10,5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="100"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>

              {/* Error number with glitch effect - Responsive sizing */}
              <div className="relative">
                <div 
                  ref={titleRef}
                  className="flex justify-center items-center gap-2 sm:gap-4"
                >
                  <span className="glitch-number text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    4
                  </span>
                  <span className="glitch-number text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black bg-gradient-to-r from-yellow-500 via-green-500 to-cyan-500 bg-clip-text text-transparent">
                    0
                  </span>
                  <span className="glitch-number text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    4
                  </span>
                </div>
                
                {/* Glitch overlay effect */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
                  <div className="flex gap-2 sm:gap-4">
                    <span className="text-red-500 text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black">4</span>
                    <span className="text-green-500 text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black">0</span>
                    <span className="text-blue-500 text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black">4</span>
                  </div>
                </div>
              </div>

              {/* Error codes display - Adjusted layout */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {errorCodes.map((code, index) => (
                  <div
                    key={index}
                    className="error-code p-3 bg-black/40 border border-white/10 rounded-lg font-mono text-xs sm:text-sm text-gray-300 hover:border-red-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${index % 3 === 0 ? 'bg-red-500' : index % 3 === 1 ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
                      <span className="truncate">{code}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating warning icons - Adjusted positioning */}
            <div className="floating-element absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 border-2 border-red-400/40 backdrop-blur-sm">
              <AlertCircle size={24} className="sm:size-8 text-red-400" />
            </div>
            <div className="floating-element absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-tr from-yellow-500/20 to-green-500/20 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12 border-2 border-yellow-400/40 backdrop-blur-sm">
              <Sparkles size={24} className="sm:size-8 text-yellow-400" />
            </div>
          </div>

          {/* Content - Adjusted sizing and spacing */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-300">Lost in the </span>
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Digital Void
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              The page you`re looking for has vanished into the digital ether. 
              It might have been moved, deleted, or never existed in this reality.
            </p>

            {/* Debug Info */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-black/40 border border-gray-800 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 flex items-center gap-2 justify-center lg:justify-start">
                <Terminal size={18} className="sm:size-5 text-blue-400" />
                Debug Information
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Error Code</div>
                  <div className="text-red-400 font-mono">HTTP 404</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Status</div>
                  <div className="text-yellow-400">Not Found</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Timestamp</div>
                  <div className="text-gray-300">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Server</div>
                  <div className="text-green-400">Online</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Home size={18} className="sm:size-5" />
                  Go Home
                </span>
              </Link>


              <button
                onClick={handleRefresh}
                disabled={isAnimating}
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                  <RefreshCw size={18} className={`sm:size-5 ${isAnimating ? "animate-spin" : ""}`} />
                  {isAnimating ? "Refreshing..." : "Retry"}
                </span>
              </button>
            </div>

            {/* Quick Links */}
            {/* <div>
              <h4 className="text-gray-400 mb-3 text-sm sm:text-base font-medium">Popular Destinations</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {["Home", "Courses", "Blog", "Docs", "Contact"].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500/50 hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
        <div className="text-center">
          <div className="text-gray-500 text-xs sm:text-sm mb-2">Nothing down here either</div>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mt-2 animate-scroll-wheel"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes scroll-wheel {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-scroll-wheel {
          animation: scroll-wheel 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;