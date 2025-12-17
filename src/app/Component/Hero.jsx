// "use client";
// import { useRef, useEffect, useState } from "react";
// import { Code, Users, Star, Zap, Sparkles, Rocket, Trophy, TrendingUp, Shield, Lock, Cpu } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import ts from "../../../public/TypeScript.svg";
// import js from "../../../public/JavaScript.svg";
// import cpp from "../../../public/CPP.svg";

// const HeroSection = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const ctaRef = useRef(null);
//   const statsRef = useRef(null);
//   const visualRef = useRef(null);
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const features = [
//     { icon: Zap, title: "Interactive Learning", desc: "Learn by doing with hands-on coding challenges" },
//     { icon: Shield, title: "Industry-Ready Skills", desc: "Master skills that tech companies actually need" },
//     { icon: Trophy, title: "Track Progress", desc: "Monitor your growth with detailed analytics" },
//     { icon: Cpu, title: "Real Projects", desc: "Build portfolio-worthy applications" },
//   ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate elements on page load with more sophisticated animations
//     const tl = gsap.timeline();

//     tl.from(titleRef.current, {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.1
//     })
//     .from(subtitleRef.current, {
//       y: 40,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power2.out"
//     }, "-=0.3")
//     .from('.feature-card', {
//       y: 30,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.15,
//       ease: "back.out(1.2)"
//     }, "-=0.2")
//     .from(statsRef.current.children, {
//       y: 40,
//       opacity: 0,
//       duration: 0.7,
//       stagger: 0.1,
//       ease: "power2.out"
//     }, "-=0.1")
//     .from(visualRef.current, {
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.2,
//       ease: "back.out(1.7)",
//       rotateY: 10
//     }, "-=0.2");

//     // Floating animation for code elements
//     const codeElements = visualRef.current?.querySelectorAll(".code-line");
//     if (codeElements) {
//       gsap.to(codeElements, {
//         y: -8,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.3,
//         ease: "sine.inOut"
//       });
//     }

//     // Animate floating icons
//     const floatingIcons = visualRef.current?.querySelectorAll(".floating-icon");
//     if (floatingIcons) {
//       gsap.to(floatingIcons, {
//         y: 20,
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.5,
//         ease: "sine.inOut"
//       });
//     }

//     // Rotate through features
//     const featureInterval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % features.length);
//     }, 3000);

//     return () => clearInterval(featureInterval);
//   }, []);

//   const trendingTech = [
//     { name: "React 18", color: "bg-blue-500/20 text-blue-400" },
//     { name: "Next.js 15", color: "bg-gray-700/30 text-gray-300" },
//     { name: "TypeScript", color: "bg-blue-600/20 text-blue-300" },
//     { name: "Node.js", color: "bg-green-500/20 text-green-400" },
//     { name: "Tailwind", color: "bg-cyan-500/20 text-cyan-400" },
//   ];

//   return (
//     <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-950">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           />
//         ))}
        
//         {/* Gradient orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 via-pink-500/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
//         <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-green-500/20 via-yellow-500/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow delay-500"></div>
//       </div>

//       {/* Cyber grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_30%,transparent_70%)]"></div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
//         {/* Content */}
//         <div className="text-center lg:text-left">
//           <div className="mb-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
//               <Sparkles size={16} className="text-yellow-400" />
//               <span className="text-sm font-medium text-cyan-300">Pakistan's #1 Code Learning Platform</span>
//             </div>
            
//             <h1 
//               ref={titleRef}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
//             >
//               Transform Your{" "}   
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//                   Coding Journey
//                 </span>
//                 <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"></div>
//               </span>
//             </h1>
            
//             <p 
//               ref={subtitleRef}
//               className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
//             >
//               Master modern technologies through interactive challenges, real-world projects, and expert-curated learning paths.
//             </p>
//           </div>

//           {/* Feature showcase */}
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className={`feature-card p-4 rounded-xl border transition-all duration-300 ${
//                   currentFeature === index 
//                     ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/40 scale-105 shadow-lg' 
//                     : 'bg-gray-800/30 border-white/10 hover:border-blue-500/30'
//                 }`}
//                 onMouseEnter={() => setCurrentFeature(index)}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2 rounded-lg ${
//                     currentFeature === index 
//                       ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' 
//                       : 'bg-gray-700/50'
//                   }`}>
//                     <feature.icon size={20} className={
//                       currentFeature === index ? 'text-blue-400' : 'text-gray-400'
//                     } />
//                   </div>
//                   <div>
//                     <h3 className={`font-semibold text-sm ${
//                       currentFeature === index ? 'text-white' : 'text-gray-300'
//                     }`}>
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs text-gray-400 mt-1">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Trending tech badges */}
//           <div className="mb-8">
//             <div className="flex items-center gap-2 mb-3">
//               <TrendingUp size={18} className="text-green-400" />
//               <span className="text-sm font-medium text-gray-300">Trending Technologies</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {trendingTech.map((tech, index) => (
//                 <span 
//                   key={index}
//                   className={`px-3 py-1.5 rounded-full text-xs font-medium border ${tech.color} border-current/20`}
//                 >
//                   {tech.name}
//                 </span>
//               ))}
//             </div>
//           </div>
          
       
//         </div>
        
//         {/* Visual element with code animation */}
//         <div ref={visualRef} className="relative">
//           <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/10 transform hover:scale-[1.02] transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-500/20">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex gap-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-300"></div>
//               </div>
//               <div className="flex items-center gap-2">

//                 <Rocket size={16} className="text-purple-400 animate-pulse" />
//               </div>
//             </div>
            
//             <div className="font-mono text-sm md:text-base space-y-2">
//               {/* Dynamic code example */}
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">1</span>
//                 <span className="text-blue-400">import</span> 
//                 <span className="text-cyan-300"> {`{ useState, useEffect }`}</span>
//                 <span className="text-blue-400"> from</span> 
//                 <span className="text-yellow-400"> "react"</span>
//                 <span className="text-white">;</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">2</span>
//                 <span className="text-gray-500">`// HackThisMonster - Modern React Patterns`</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">3</span>
//                 <span className="text-blue-400">export</span> 
//                 <span className="text-blue-400"> default</span> 
//                 <span className="text-blue-400"> function</span> 
//                 <span className="text-cyan-300"> Counter</span>
//                 <span className="text-white">() {"{"}</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">4</span>
//                 <span className="text-blue-400 ml-4">const</span> 
//                 <span className="text-white"> [count, setCount] = </span>
//                 <span className="text-cyan-300">useState</span>
//                 <span className="text-white">(0);</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">5</span>
//                 <span className="text-blue-400 ml-4">useEffect</span>
//                 <span className="text-white">(() {"=>"} {"{"}</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">6</span>
//                 <span className="text-white ml-8">const</span> 
//                 <span className="text-white"> interval =</span>
//                 <span className="text-blue-400"> setInterval</span>
//                 <span className="text-white">(() {"=>"} {"{"}</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">7</span>
//                 <span className="text-blue-400 ml-12">setCount</span>
//                 <span className="text-white">{`(prev => prev + 1);`}</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">8</span>
//                 <span className="text-white ml-8">{"}"}, 1000);</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">9</span>
//                 <span className="text-blue-400 ml-8">return</span> 
//                 <span className="text-white"> {`() =>`}</span>
//                 <span className="text-blue-400"> clearInterval</span>
//                 <span className="text-white">(interval);</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">10</span>
//                 <span className="text-white ml-4">{"}"}, []);</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">11</span>
//                 <span className="text-blue-400 ml-4">return</span> 
//                 <span className="text-white"> (</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">12</span>
//                 <span className="text-white ml-8">{`<div className="p-4">`}</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">13</span>
//                 <span className="text-white ml-12">`<h1>Count: {"{"}count{"}"}</h1>`</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">14</span>
//                 <span className="text-white ml-8">{`</div>`}</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">15</span>
//                 <span className="text-white ml-4">);</span>
//               </div>
//               <div className="code-line flex">
//                 <span className="text-purple-400 mr-4">16</span>
//                 <span className="text-white">{"}"}</span>
//               </div>
//             </div>

//           </div>
          
//           {/* Floating tech icons */}
//           <div className="floating-icon absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 border-2 border-blue-400/40 backdrop-blur-sm">
//             <div className="relative">
//               <Image src={cpp} alt="C++" className="w-16 h-16" />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
//             </div>
//           </div>
          
//           <div className="floating-icon absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12 border-2 border-purple-400/40 backdrop-blur-sm">
//             <div className="relative">
//               <Image src={ts} alt="TypeScript" className="w-16 h-16" />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
//             </div>
//           </div>

//           <div className="floating-icon absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 border-2 border-cyan-400/40 backdrop-blur-sm">
//             <div className="relative">
//               <Image src={js} alt="JavaScript" className="w-16 h-16" />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>
      

//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.7;
//             transform: scale(1.05);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//           }
//           50% {
//             transform: translateY(-20px) translateX(10px);
//           }
//         }
        
//         @keyframes scroll-wheel {
//           0% {
//             transform: translateY(0);
//             opacity: 0;
//           }
//           30% {
//             opacity: 1;
//           }
//           70% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-scroll-wheel {
//           animation: scroll-wheel 2s ease-in-out infinite;
//         }
        
//         .border-gradient-to-b {
//           border-image: linear-gradient(to bottom, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4)) 1;
//         }
//       `}</style>


//     </section>
//   );
// };

// export default HeroSection;




"use client";
import { useRef, useEffect, useState } from "react";
import { Code, Users, Star, Zap, Sparkles, Rocket, Trophy, TrendingUp, Shield, Lock, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ts from "../../../public/TypeScript.svg";
import js from "../../../public/JavaScript.svg";
import cpp from "../../../public/CPP.svg";

// Predefined deterministic particle positions
const STATIC_PARTICLES = Array.from({ length: 20 }, (_, i) => {
  // Use deterministic pseudo-random values based on index
  const seed = i * 0.6180339887; // Golden ratio
  return {
    left: `${((Math.sin(seed * 100) + 1) / 2) * 100}%`,
    top: `${((Math.cos(seed * 150) + 1) / 2) * 100}%`,
    animationDelay: `${((Math.sin(seed * 200) + 1) / 2) * 5}s`,
    animationDuration: `${3 + ((Math.cos(seed * 250) + 1) / 2) * 4}s`
  };
});

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const features = [
    { icon: Zap, title: "Interactive Learning", desc: "Learn by doing with hands-on coding challenges" },
    { icon: Shield, title: "Industry-Ready Skills", desc: "Master skills that tech companies actually need" },
    { icon: Trophy, title: "Track Progress", desc: "Monitor your growth with detailed analytics" },
    { icon: Cpu, title: "Real Projects", desc: "Build portfolio-worthy applications" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements on page load with more sophisticated animations
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1
    })
    .from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .from('.feature-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }, "-=0.2")
    .from(statsRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.1")
    .from(visualRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      rotateY: 10
    }, "-=0.2");

    // Floating animation for code elements
    const codeElements = visualRef.current?.querySelectorAll(".code-line");
    if (codeElements) {
      gsap.to(codeElements, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut"
      });
    }

    // Animate floating icons
    const floatingIcons = visualRef.current?.querySelectorAll(".floating-icon");
    if (floatingIcons) {
      gsap.to(floatingIcons, {
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut"
      });
    }

    // Rotate through features
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(featureInterval);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const trendingTech = [
    { name: "React 18", color: "bg-blue-500/20 text-blue-400" },
    { name: "Next.js 15", color: "bg-gray-700/30 text-gray-300" },
    { name: "TypeScript", color: "bg-blue-600/20 text-blue-300" },
    { name: "Node.js", color: "bg-green-500/20 text-green-400" },
    { name: "Tailwind", color: "bg-cyan-500/20 text-cyan-400" },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-950">
      {/* Simplified version for SSR - no particles */}
      {!isMounted ? (
        <>
          {/* Cyber grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_30%,transparent_70%)]"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-sm font-medium text-cyan-300">Pakistan's #1 Code Learning Platform</span>
                </div>
                
                <h1 
                  ref={titleRef}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                >
                  Transform Your{" "}   
                  <span className="relative">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                      Coding Journey
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"></div>
                  </span>
                </h1>
                
                <p 
                  ref={subtitleRef}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Master modern technologies through interactive challenges, real-world projects, and expert-curated learning paths.
                </p>
              </div>

              {/* Feature showcase */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="feature-card p-4 rounded-xl border bg-gray-800/30 border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-700/50">
                        <feature.icon size={20} className="text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-300">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trending tech badges */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={18} className="text-green-400" />
                  <span className="text-sm font-medium text-gray-300">Trending Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTech.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${tech.color} border-current/20`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Visual element */}
            <div ref={visualRef} className="relative">
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/10">
                {/* Content */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Full version with particles (client-side only) */}
          <div className="absolute inset-0 overflow-hidden">
            {STATIC_PARTICLES.map((style, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                style={style}
              />
            ))}
            
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 via-pink-500/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-green-500/20 via-yellow-500/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow delay-500"></div>
          </div>

          {/* Cyber grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_30%,transparent_70%)]"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-sm font-medium text-cyan-300">Pakistan's #1 Code Learning Platform</span>
                </div>
                
                <h1 
                  ref={titleRef}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                >
                  Transform Your{" "}   
                  <span className="relative">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                      Coding Journey
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full"></div>
                  </span>
                </h1>
                
                <p 
                  ref={subtitleRef}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Master modern technologies through interactive challenges, real-world projects, and expert-curated learning paths.
                </p>
              </div>

              {/* Feature showcase */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`feature-card p-4 rounded-xl border transition-all duration-300 ${
                      currentFeature === index 
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/40 scale-105 shadow-lg' 
                        : 'bg-gray-800/30 border-white/10 hover:border-blue-500/30'
                    }`}
                    onMouseEnter={() => setCurrentFeature(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        currentFeature === index 
                          ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' 
                          : 'bg-gray-700/50'
                      }`}>
                        <feature.icon size={20} className={
                          currentFeature === index ? 'text-blue-400' : 'text-gray-400'
                        } />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-sm ${
                          currentFeature === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trending tech badges */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={18} className="text-green-400" />
                  <span className="text-sm font-medium text-gray-300">Trending Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTech.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${tech.color} border-current/20`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
            
            {/* Visual element with code animation */}
            <div ref={visualRef} className="relative">
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/10 transform hover:scale-[1.02] transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-300"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Rocket size={16} className="text-purple-400 animate-pulse" />
                  </div>
                </div>
                
                <div className="font-mono text-sm md:text-base space-y-2">
                  {/* Dynamic code example */}
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">1</span>
                    <span className="text-blue-400">import</span> 
                    <span className="text-cyan-300"> {`{ useState, useEffect }`}</span>
                    <span className="text-blue-400"> from</span> 
                    <span className="text-yellow-400"> "react"</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">2</span>
                    <span className="text-gray-500">`// HackThisMonster - Modern React Patterns`</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">3</span>
                    <span className="text-blue-400">export</span> 
                    <span className="text-blue-400"> default</span> 
                    <span className="text-blue-400"> function</span> 
                    <span className="text-cyan-300"> Counter</span>
                    <span className="text-white">() {"{"}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">4</span>
                    <span className="text-blue-400 ml-4">const</span> 
                    <span className="text-white"> [count, setCount] = </span>
                    <span className="text-cyan-300">useState</span>
                    <span className="text-white">(0);</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">5</span>
                    <span className="text-blue-400 ml-4">useEffect</span>
                    <span className="text-white">(() {"=>"} {"{"}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">6</span>
                    <span className="text-white ml-8">const</span> 
                    <span className="text-white"> interval =</span>
                    <span className="text-blue-400"> setInterval</span>
                    <span className="text-white">(() {"=>"} {"{"}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">7</span>
                    <span className="text-blue-400 ml-12">setCount</span>
                    <span className="text-white">{`(prev => prev + 1);`}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">8</span>
                    <span className="text-white ml-8">{"}"}, 1000);</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">9</span>
                    <span className="text-blue-400 ml-8">return</span> 
                    <span className="text-white"> {`() =>`}</span>
                    <span className="text-blue-400"> clearInterval</span>
                    <span className="text-white">(interval);</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">10</span>
                    <span className="text-white ml-4">{"}"}, []);</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">11</span>
                    <span className="text-blue-400 ml-4">return</span> 
                    <span className="text-white"> (</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">12</span>
                    <span className="text-white ml-8">{`<div className="p-4">`}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">13</span>
                    <span className="text-white ml-12">`<h1>Count: {"{"}count{"}"}</h1>`</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">14</span>
                    <span className="text-white ml-8">{`</div>`}</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">15</span>
                    <span className="text-white ml-4">);</span>
                  </div>
                  <div className="code-line flex">
                    <span className="text-purple-400 mr-4">16</span>
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="floating-icon absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 border-2 border-blue-400/40 backdrop-blur-sm">
                <div className="relative">
                  <Image src={cpp} alt="C++" className="w-16 h-16" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="floating-icon absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12 border-2 border-purple-400/40 backdrop-blur-sm">
                <div className="relative">
                  <Image src={ts} alt="TypeScript" className="w-16 h-16" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="floating-icon absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 border-2 border-cyan-400/40 backdrop-blur-sm">
                <div className="relative">
                  <Image src={js} alt="JavaScript" className="w-16 h-16" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scroll-wheel {
          animation: scroll-wheel 2s ease-in-out infinite;
        }
        
        .border-gradient-to-b {
          border-image: linear-gradient(to bottom, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4)) 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;