"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ReadyToTransformYourLife = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Grid line animation
    gsap.to(".grid-line", {
      backgroundPosition: "100% 100%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Floating code elements - optimized
    gsap.to(".floating-code", {
      y: -20,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: "sine.inOut"
    });

    // Main content animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cyber-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false // Remove in production
      }
    });

    tl.fromTo(".cyber-card",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(".cyber-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }, "-=0.5"
    )
    .fromTo(".cyber-feature",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 }, "-=0.3"
    )
    .fromTo(".cyber-button",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="cyber-section relative min-h-screen bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="grid-line absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.05)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.05)_25px,transparent_26px)] bg-[size:50px_50px] bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      </div>

      {/* Floating Code Elements - Reduced count for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          "{ }", "</>", "function", "const", "React", "Node", "API", "Git"
        ].map((code, index) => (
          <div
            key={index}
            className="floating-code absolute text-blue-400/20 font-mono text-lg"
            style={{
              left: `${Math.random() * 90 + 5}%`, // Keep within bounds
              top: `${Math.random() * 90 + 5}%`,
              fontSize: `${Math.random() * 16 + 12}px`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="cyber-card max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Column - Visual */}
            <div className="relative">
              {/* Cyber Terminal */}
              <div className="bg-gray-900/80 backdrop-blur-xl border border-blue-500/30 rounded-xl p-4 md:p-6 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-green-400">$ career status --check</div>
                  <div className="text-blue-400">→ Current Level: <span className="text-white">Junior Developer</span></div>
                  <div className="text-blue-400">→ Target Level: <span className="text-yellow-400">Senior Engineer</span></div>
                  <div className="text-blue-400">→ Skills Required: <span className="text-purple-400">Advanced</span></div>
                  <div className="text-green-400 mt-4">$ execute --transformation</div>
                  <div className="text-white animate-pulse">🚀 Initializing career acceleration...</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
                {[
                  { value: "10x", label: "Faster Learning" },
                  { value: "24/7", label: "Support" },
                  { value: "100%", label: "Job Focused" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 md:p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-xs text-blue-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="cyber-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    CODE YOUR
                  </span>
                  <br />
                  <span className="text-white">
                    DREAM CAREER
                  </span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="cyber-title text-lg md:text-xl text-gray-300 leading-relaxed">
                Stop dreaming. Start building. We provide the <span className="text-blue-400 font-semibold">tools</span>, 
                <span className="text-purple-400 font-semibold"> mentorship</span>, and 
                <span className="text-cyan-400 font-semibold"> roadmap</span> to transform you into a top-tier developer.
              </p>

              {/* Features */}
              <div className="space-y-3 md:space-y-4">
                {[
                  "🎯 Personalized 1:1 Mentorship",
                  "⚡ Real-World Project Portfolio", 
                  "💼 Interview & Career Preparation",
                  "🚀 Cutting-Edge Tech Stack",
                  "🌐 Global Community Access",
                  "📈 Continuous Skill Assessment"
                ].map((feature, index) => (
                  <div key={index} className="cyber-feature flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="space-y-4 md:space-y-6">
                <button className="cyber-button group relative w-full max-w-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative flex items-center justify-center space-x-2 md:space-x-3">
                    <span className="text-sm md:text-base">Launch Your Tech Career</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                {/* Trust Badges */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center text-xs md:text-sm text-gray-400">
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>1,000+ Career Transformations</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Average 3x Salary Increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scan Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default ReadyToTransformYourLife;