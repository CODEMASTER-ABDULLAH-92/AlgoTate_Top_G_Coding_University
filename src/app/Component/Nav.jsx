"use client";
import { useRef, useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "@/app/assets/logo.png";
import { useSelector } from "react-redux";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheatSheetsOpen, setIsCheatSheetsOpen] = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);


  const textRef = useRef(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.4,
      }
    );
  });

  // Programming languages for cheat sheets
  const programmingLanguages = [
    { name: "JavaScript", href: "/cheatsheets/javascript" },
    { name: "Python", href: "/cheatsheets/python" },
    { name: "Java", href: "/cheatsheets/java" },
    { name: "C++", href: "/cheatsheets/cpp" },
    { name: "TypeScript", href: "/cheatsheets/typescript" },
    { name: "Go", href: "/cheatsheets/go" },
    { name: "Rust", href: "/cheatsheets/rust" },
    { name: "SQL", href: "/cheatsheets/sql" },
  ];

  // Tutorial categories
  const tutorialCategories = [
    {
      category: "Web Development",
      tutorials: [
        // { name: "HTML & CSS", href: "/tutorials/html-css" },
        { name: "JavaScript", href: "/yt_tutorials/Javascript" },
      ],
    },
    {
      category: "Programming Languages",
      tutorials: [
        // { name: "Python", href: "/tutorials/python" },
        // { name: "Java", href: "/tutorials/java" },
        { name: "JavaScript", href: "/yt_tutorials/Javascript" },

      ],
    },
    // {
    //   category: "Mobile & More",
    //   tutorials: [
    //     { name: "React Native", href: "/tutorials/react-native" },
    //     { name: "Flutter", href: "/tutorials/flutter" },
    //     { name: "Docker", href: "/tutorials/docker" },
    //     { name: "Git & GitHub", href: "/tutorials/git" },
    //   ]
    // }
  ];

  return (
    <nav className="sticky cursor-pointer top-0 z-50 w-full py-2 bg-gray-900/80 backdrop-blur-xl border-b border-blue-500/20 shadow-xl hover:border-blue-500/30 transition-all duration-300">
      <div className="w-full mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl flex justify-center items-center font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300"
        >
          <p className="text-lg sm:text-xl md:text-2xl">Algo Tate</p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-10 cursor-pointer text-lg font-medium items-center">
          {/* CheatSheets Dropdown */}

          {/* <div className="relative group">
            <button
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-300 transition-all duration-300 group"
              onMouseEnter={() => setIsCheatSheetsOpen(true)}
              onMouseLeave={() => setIsCheatSheetsOpen(false)}
            >
              <span>CheatSheets</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  isCheatSheetsOpen ? "rotate-180" : ""
                }`}
              />
            </button>


            {isCheatSheetsOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 cursor-pointer bg-gray-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl py-4 z-50"
                onMouseEnter={() => setIsCheatSheetsOpen(true)}
                onMouseLeave={() => setIsCheatSheetsOpen(false)}
              >
                <div className="px-4 py-2 text-sm text-blue-300 border-b border-blue-500/20">
                  Programming Languages
                </div>
                <div className="grid grid-cols-1 gap-1 p-2">
                  {programmingLanguages.map((language) => (
                    <Link
                      key={language.name}
                      href={language.href}
                      className="px-3 py-2 text-gray-300 hover:bg-blue-500/10 rounded-lg transition-all duration-300 hover:text-white flex items-center space-x-2 group/item border border-transparent hover:border-blue-500/20"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                      <span>{language.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-blue-500/20 mt-2">
                  <Link
                    href="/cheatsheets"
                    className="text-center block w-full px-3 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:scale-105 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50"
                  >
                    View All CheatSheets
                  </Link>
                </div>
              </div>
            )}
          </div> */}

          {/* Tutorials Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-gray-300 hover:text-purple-300 transition-all duration-300 group"
              onMouseEnter={() => setIsTutorialsOpen(true)}
              onMouseLeave={() => setIsTutorialsOpen(false)}
            >
              <span>Tutorials</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  isTutorialsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Tutorials Dropdown Menu */}
            {isTutorialsOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 bg-gray-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl py-4 z-50"
                onMouseEnter={() => setIsTutorialsOpen(true)}
                onMouseLeave={() => setIsTutorialsOpen(false)}
              >
                <div className="px-4 py-2 text-sm text-purple-300 border-b border-purple-500/20">
                  Learn & Master Technologies
                </div>

                {tutorialCategories.map((category, index) => (
                  <div key={category.category} className="mb-3">
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                      {category.category}
                    </div>
                    <div className="grid grid-cols-1 gap-1 px-2">
                      {category.tutorials.map((tutorial) => (
                        <Link
                          key={tutorial.name}
                          href={tutorial.href}
                          className="px-3 py-2 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-all duration-300 hover:text-white flex items-center space-x-2 group/item border border-transparent hover:border-purple-500/20"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full"></span>
                          <span className="text-sm">{tutorial.name}</span>
                        </Link>
                      ))}
                    </div>
                    {index < tutorialCategories.length - 1 && (
                      <div className="border-t border-purple-500/20 mx-2 my-2"></div>
                    )}
                  </div>
                ))}

                <div className="px-4 py-2 border-t border-purple-500/20 mt-2">
                  {/* <Link
                    href="/tutorials"
                    className="text-center block w-full px-3 py-2 text-sm bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg text-white hover:scale-105 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50"
                  >
                    Browse All Tutorials
                  </Link> */}
                </div>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/tate_message"
            className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
          >
            {/* Explore */}
            Tate Message
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 hover:text-purple-400 transition-colors duration-300 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="md:hidden fixed inset-0 opacity-100 bg-gradient-to-br h-screen from-gray-900 via-purple-900/95 to-blue-900/90 backdrop-blur-3xl z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Content */}
          <div className="md:hidden fixed inset-0 h-screen z-50 flex flex-col items-center justify-start pt-16 pb-8 px-4 overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-cyan-300 transition-colors duration-300 bg-blue-500/30 p-3 rounded-xl border border-blue-400/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Logo in Mobile Menu */}
            <div className="mb-6 text-center">
              <Link
                href="/"
                className="flex flex-col justify-center items-center"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  alt="Logo"
                  className="w-16 h-16 object-contain bg-transparent mb-3"
                  src={logo}
                />
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {domainName}
                </p>
              </Link>
            </div>

            {/* Mobile Navigation Items */}
            <div className="w-full max-w-sm space-y-4 flex-1 flex flex-col">
              {/* CheatSheets Accordion */}
              {/* <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-blue-500/30 p-4">
                <button
                  className="flex items-center justify-between w-full text-left text-white font-semibold text-base hover:scale-[1.02] transition-transform duration-300 py-2"
                  onClick={() => setIsCheatSheetsOpen(!isCheatSheetsOpen)}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    CheatSheets
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 text-blue-400 ${
                      isCheatSheetsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCheatSheetsOpen && (
                  <div className="mt-3 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      {programmingLanguages.map((language) => (
                        <Link
                          key={language.name}
                          href={language.href}
                          onClick={() => setIsOpen(false)}
                          className="px-3 py-2 text-xs sm:text-sm text-gray-200 hover:bg-blue-500/25 rounded-lg transition-all duration-300 text-center border border-blue-500/30 hover:border-blue-400/60 hover:scale-105 backdrop-blur-sm"
                        >
                          {language.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/cheatsheets"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-3 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-center hover:scale-105 transition-all duration-300 border border-blue-500/40 mt-2 font-semibold"
                    >
                      View All CheatSheets
                    </Link>
                  </div>
                )}
              </div> */}

              {/* Tutorials Accordion */}
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-purple-500/30 p-4">
                <button
                  className="flex items-center justify-between w-full text-left text-white font-semibold text-base hover:scale-[1.02] transition-transform duration-300 py-2"
                  onClick={() => setIsTutorialsOpen(!isTutorialsOpen)}
                >
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                    Tutorials
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 text-purple-400 ${
                      isTutorialsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isTutorialsOpen && (
                  <div className="mt-3 space-y-3">
                    {tutorialCategories.map((category) => (
                      <div key={category.category}>
                        <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2 px-1">
                          {category.category}
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {category.tutorials.map((tutorial) => (
                            <Link
                              key={tutorial.name}
                              href={tutorial.href}
                              onClick={() => setIsOpen(false)}
                              className="px-2 py-2 text-xs text-gray-200 hover:bg-purple-500/25 rounded-lg transition-all duration-300 text-center border border-purple-500/30 hover:border-purple-400/60 hover:scale-105 backdrop-blur-sm"
                            >
                              {tutorial.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* <Link
                      href="/tutorials"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-3 py-2 text-sm bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg text-white text-center hover:scale-105 transition-all duration-300 border border-purple-500/40 mt-1 font-semibold"
                    >
                      Browse All Tutorials
                    </Link> */}
                    
                  </div>
                )}
              </div>

              {/* Explore Link */}
              <Link
                href="tate_message"
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-3 text-white hover:text-cyan-300 transition-all duration-300 bg-gray-800/40 hover:bg-cyan-500/25 rounded-xl text-center border border-cyan-500/30 hover:border-cyan-400/60 backdrop-blur-xl text-base font-semibold hover:scale-105 mt-auto"
              >
                Tate Message
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 opacity-100 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.02)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.02)_25px,transparent_26px)] bg-[size:40px_40px] pointer-events-none"></div>
    </nav>
  );
};

export default Navbar;
