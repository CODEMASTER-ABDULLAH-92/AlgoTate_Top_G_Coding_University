"use client";
import { useState, useEffect } from "react";
import { Heart, ChevronUp, Sparkles, Code, Zap, Github, Youtube, Twitter, Mail, ExternalLink } from "lucide-react";

const MinimalFooter = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [heartBeat, setHeartBeat] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Heart beat animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartBeat(true);
      setTimeout(() => setHeartBeat(false), 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent border-t border-white/10 mt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              {/* Animated logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md opacity-50"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 group cursor-pointer">
                  <Code size={24} className="text-white group-hover:rotate-12 transition-transform duration-300" />
                  <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
                </div>
              </div>

              {/* Brand name with gradient animation */}
              <div className="relative">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  HackThisMonster
                </span>
                <Zap size={16} className="absolute -top-2 -right-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base max-w-md">
              Empowering developers with cutting-edge tutorials, 
              <span className="text-blue-300 font-medium"> real-world projects</span>, and 
              <span className="text-purple-300 font-medium"> community-driven learning</span>.
            </p>
          </div>

          {/* Social links - Desktop */}
          <div className="hidden md:flex flex-col items-end gap-4">
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com", color: "hover:text-gray-300 hover:bg-gray-700" },
                { icon: Youtube, href: "https://youtube.com", color: "hover:text-red-400 hover:bg-red-900/20" },
                { icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400 hover:bg-blue-900/20" },
                { icon: Mail, href: "mailto:contact@hackthismonster.com", color: "hover:text-green-400 hover:bg-green-900/20" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                  title={social.icon.name}
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-400 transition-all duration-300 group-hover:rotate-12" 
                  />
                </a>
              ))}
            </div>
            
            {/* Quick stats */}
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="text-blue-400 font-bold">100+</span> Tutorials
              </span>
              <span className="flex items-center gap-1">
                <span className="text-purple-400 font-bold">10K+</span> Developers
              </span>
            </div>
          </div>
        </div>

        {/* Divider with animation */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gray-900">
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <Sparkles size={12} className="text-blue-400" />
                Build with passion
                <Sparkles size={12} className="text-purple-400" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar with enhanced design */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright with animated heart */}
          <div className="text-gray-300 text-sm flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span>© {currentYear} HackThisMonster</span>
            <span className="hidden md:inline text-gray-500">•</span>
            <span className="flex items-center gap-1">
              Crafted with 
              <Heart 
                size={14} 
                className={`text-red-400 fill-red-400 transition-all duration-300 ${heartBeat ? 'scale-125' : 'scale-100'}`}
              />
              by developers
            </span>
            <span className="hidden md:inline text-gray-500">•</span>

          </div>

          {/* CTA Button */}


          {/* Back to Top Button with animation */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="group fixed md:relative bottom-6 right-6 md:bottom-auto md:right-auto z-50"
              title="Back to top"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/30 rounded-xl blur-md group-hover:bg-blue-500/50 transition-all duration-300"></div>
                
                {/* Main button */}
                <div className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-xl backdrop-blur-sm group-hover:border-blue-400/30 transition-all duration-300 group-hover:scale-110">
                  <ChevronUp 
                    size={20} 
                    className="text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Back to top
                </div>
              </div>
            </button>
          )}
        </div>

        {/* Social links - Mobile */}
        <div className="mt-8 md:hidden">
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Mail, href: "mailto:contact@hackthismonster.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-200">
                  <social.icon size={18} className="text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Version tag */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs text-gray-500 bg-white/5 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            v2.0 • Always learning, always building
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;