"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Youtube, Star, Clock, Users, ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "@/app/Component/SeoComp";
import { useParams } from "next/navigation";
import Footer from "@/app/Component/f"
const LanguageTutorialPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const params = useParams();
  const languageId = params.langauge || "";

  // JavaScript tutorial data
  const javascriptTutorials = [
    {
      id: 1,
      title: "JavaScript Basics & Fundamentals",
      level: "Beginner",
      videoId: "W6NZfCO5SIk",
      exp_link: "/pages/Js/js-data-type",
      category: "fundamentals"
    },
    {
      id: 2,
      title: "JavaScript Data Types",
      level: "Intermediate",
      videoId: "y17RuWkWdn8",
      exp_link: "/pages/Js/js-data-type",
      category: "fundamentals"
    },
    {
      id: 3,
      title: "JavaScript Array",
      level: "Intermediate",
      videoId: "NCwa_xi0Uuc",
      exp_link: "/pages/Js/js-array-methods",
      category: "data-structures"
    },
    {
      id: 4,
      title: "JavaScript Loops",
      level: "Advanced",
      videoId: "ZYb_ZU8LNxs",
      exp_link: "/pages/Js/js-loops",
      category: "control-flow"
    },
    {
      id: 5,
      title: "JavaScript Strings",
      level: "Intermediate",
      videoId: "R8rmfD9Y5c8",
      exp_link: "/pages/Js/Js-strings-methods",
      category: "strings"
    },
    {
      id: 6,
      title: "JavaScript Math",
      level: "Intermediate",
      videoId: "PFmuCDHHpwk",
      exp_link: "/pages/Js/js-math",
      category: "functions"
    },
    {
      id: 7,
      title: "JavaScript Date",
      level: "Intermediate",
      videoId: "PFmuCDHHpwk",
      exp_link: "/pages/Js/js-date-methods",
      category: "functions"
    },
    {
      id: 8,
      title: "OTP & Password Generator Project",
      level: "Intermediate",
      videoId: "PFmuCDHHpwk",
      exp_link: "/pages/Js/js-otp-password",
      category: "projects"
    },
  ];

  // C++ tutorial data
  const cppTutorials = [
    {
      id: 1,
      title: "C++ Basics & Syntax",
      level: "Beginner",
      videoId: "vLnPwxZdW4Y",
      exp_link: "/pages/cpp/cpp-basics",
      category: "fundamentals"
    },
    {
      id: 2,
      title: "C++ Data Types & Variables",
      level: "Beginner",
      videoId: "IzoFW3sHtu0",
      exp_link: "/pages/cpp/cpp-data-types",
      category: "fundamentals"
    },
    {
      id: 3,
      title: "C++ Functions",
      level: "Intermediate",
      videoId: "GQp1zzTwrIg",
      exp_link: "/pages/cpp/cpp-functions",
      category: "functions"
    },
    {
      id: 4,
      title: "C++ Object-Oriented Programming",
      level: "Intermediate",
      videoId: "wN0x9eZLix4",
      exp_link: "/pages/cpp/cpp-oop",
      category: "oop"
    },
    {
      id: 5,
      title: "C++ Pointers & Memory Management",
      level: "Advanced",
      videoId: "DTxHyVn0ODg",
      exp_link: "/pages/cpp/cpp-pointers",
      category: "memory"
    },
    {
      id: 6,
      title: "C++ Inheritance & Polymorphism",
      level: "Advanced",
      videoId: "gq2Igdc-OSI",
      exp_link: "/pages/cpp/cpp-inheritance",
      category: "oop"
    },
    {
      id: 7,
      title: "C++ Templates",
      level: "Advanced",
      videoId: "I-hZkUa9mIs",
      exp_link: "/pages/cpp/cpp-templates",
      category: "advanced"
    },
    {
      id: 8,
      title: "C++ Exception Handling",
      level: "Intermediate",
      videoId: "m9VOUPInKww",
      exp_link: "/pages/cpp/cpp-exceptions",
      category: "error-handling"
    },
  ];

  // STL (Standard Template Library) tutorial data
  const stlTutorials = [
    {
      id: 1,
      title: "STL Vector - Complete Guide",
      level: "Intermediate",
      videoId: "PocJ5jXv8No",
      exp_link: "/pages/stl/stl-vector",
      category: "containers"
    },
    {
      id: 2,
      title: "STL List & Forward List",
      level: "Intermediate",
      videoId: "YkiY3LtSfuU",
      exp_link: "/pages/stl/stl-list",
      category: "containers"
    },
    {
      id: 3,
      title: "STL Map & Unordered Map",
      level: "Intermediate",
      videoId: "7mwgA9XFIEQ",
      exp_link: "/pages/stl/stl-map",
      category: "containers"
    },
    {
      id: 4,
      title: "STL Set & Multiset",
      level: "Intermediate",
      videoId: "qhJxr2uKras",
      exp_link: "/pages/stl/stl-set",
      category: "containers"
    },
    {
      id: 5,
      title: "STL Algorithms - Sort, Find, Transform",
      level: "Advanced",
      videoId: "49lH1wtC6VY",
      exp_link: "/pages/stl/stl-algorithms",
      category: "algorithms"
    },
    {
      id: 6,
      title: "STL Stack & Queue",
      level: "Intermediate",
      videoId: "XLWW3X8c-ec",
      exp_link: "/pages/stl/stl-stack-queue",
      category: "adapters"
    },
    {
      id: 7,
      title: "STL Priority Queue",
      level: "Advanced",
      videoId: "wptevk0bshY",
      exp_link: "/pages/stl/stl-priority-queue",
      category: "adapters"
    },
    {
      id: 8,
      title: "STL Iterators - Complete Guide",
      level: "Advanced",
      videoId: "SgcHcbQ0DCQ",
      exp_link: "/pages/stl/stl-iterators",
      category: "iterators"
    },
  ];

  // Get tutorials based on language ID
  const getTutorialsByLanguage = () => {
    switch (languageId.toLowerCase()) {
      case "javascript":
        return javascriptTutorials;
      case "c++":
      case "cpp":
        return cppTutorials;
      case "stl":
        return stlTutorials;
      default:
        return javascriptTutorials; // Default to JavaScript
    }
  };

  // Get page title based on language ID
  const getPageTitle = () => {
    switch (languageId.toLowerCase()) {
      case "javascript":
        return "JavaScript Tutorials";
      case "c++":
      case "cpp":
        return "C++ Tutorials";
      case "stl":
        return "C++ STL Tutorials";
      default:
        return "Programming Tutorials";
    }
  };

  // Get page description based on language ID
  const getPageDescription = () => {
    switch (languageId.toLowerCase()) {
      case "javascript":
        return "Master JavaScript from fundamentals to advanced concepts. Learn modern ES6+ features, DOM manipulation, asynchronous programming and much more.";
      case "c++":
      case "cpp":
        return "Learn C++ programming from basics to advanced topics. Master object-oriented programming, memory management, templates and modern C++ features.";
      case "stl":
        return "Master the C++ Standard Template Library (STL). Learn containers, algorithms, iterators and functional programming with real-world examples.";
      default:
        return "Learn programming with comprehensive tutorials and examples.";
    }
  };

  const tutorials = getTutorialsByLanguage();
  const pageTitle = getPageTitle();
  const pageDescription = getPageDescription();

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch = tutorial.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  // Get unique categories for filter
  const categories = ["all", ...new Set(tutorials.map(t => t.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <SEO
        title={`${pageTitle} | HackThisMonster`}
        description={pageDescription}
        keywords={languageId.toLowerCase() === "stl" ? "c++, stl, standard template library" : languageId}
      />
      <Link href={"/"} className="flex justify-start gap-2 absolute top-5 left-5 cursor-pointer z-40 items-center"><ArrowLeft size={20}/>Back</Link>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {pageDescription}
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder={`Search ${languageId} tutorials...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Category Filter - Optional, can be removed if not needed */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {category === "all" ? "All Topics" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tutorials Table */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/10 border-b border-white/10 text-sm font-semibold text-gray-300">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-6">Topic Name</div>
                <div className="col-span-2 text-center">Explanation</div>
                <div className="col-span-1 text-center">Actions</div>
                <div className="col-span-2 text-center">Level</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-white/10">
                {filteredTutorials.map((tutorial, index) => (
                  <div
                    key={tutorial.id}
                    className="grid grid-cols-12 gap-4 px-6 py-6 hover:bg-white/5 transition-all duration-200 group"
                  >
                    {/* Serial Number */}
                    <div className="col-span-1 flex items-center justify-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>

                    {/* Topic Name and Description */}
                    <div className="col-span-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                            {tutorial.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Explanation Link */}
                    <div className="col-span-2 flex items-center justify-center">
                      <Link 
                        href={tutorial.exp_link} 
                        target="_blank"
                        className={`px-4 py-1 text-xs rounded-full font-semibold border ${getLevelColor(
                          tutorial.level
                        )}`}
                      >
                        Link
                      </Link>
                    </div>

                    {/* Actions - YouTube Icon */}
                    <div className="col-span-1 flex items-center justify-center gap-2">
                      <Link
                        href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                        target="_blank"
                        className="flex flex-col items-center gap-1 p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl text-red-400 hover:text-white transition-all duration-200 group/yt"
                        title="Watch on YouTube"
                      >
                        <Youtube
                          size={20}
                          className="group-hover/yt:scale-110 transition-transform"
                        />
                      </Link>
                    </div>
                    
                    {/* Level Badge */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(
                          tutorial.level
                        )}`}
                      >
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredTutorials.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-lg mb-4">
                    No tutorials found matching your criteria.
                  </div>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-scroll-up {
          animation: scroll-up 130s linear infinite;
        }
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default LanguageTutorialPage;






// <div className="lg:w-1/4">
//           <div className="sticky top-8">
//             <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 mb-6">
//               <h2 className="text-2xl font-bold text-white mb-2">Premium Courses</h2>
//               <p className="text-gray-300 text-sm mb-4">
//                 Level up your skills with our expert-led premium courses
//               </p>

//               {/* Animated Scrolling Cards Container */}
//               <div className="relative h-96 overflow-hidden rounded-xl">
//                 <div className="animate-scroll-up space-y-4">
//                   {[...premiumCourses,...premiumCourses,...premiumCourses,...premiumCourses].map((course,index) => (
//                     <div
//                       key={index}
//                       className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer group"
//                     >
//                       <div className="flex items-start gap-3 mb-3">
//                         <div className="text-2xl">{course.image}</div>
//                         <div className="flex-1">
//                           <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
//                             {course.title}
//                           </h3>
//                           <p className="text-gray-400 text-xs mt-1">
//                             {course.description}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
//                         <div className="flex items-center gap-4">
//                           <div className="flex items-center gap-1">
//                             <Clock size={12} />
//                             <span>{course.duration}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Users size={12} />
//                             <span>{course.students}</span>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Star size={12} className="text-yellow-400 fill-yellow-400" />
//                           <span>{course.rating}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <span className="text-lg font-bold text-green-400">
//                             {course.price}
//                           </span>
//                           <span className="text-xs text-gray-400 line-through">
//                             {course.originalPrice}
//                           </span>
//                         </div>
//                         <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 group-hover:scale-110 flex items-center gap-1">
//                           Enroll
//                           <ArrowRight size={12} />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-6 text-center">
//                 <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                   View All Premium Courses
//                   <ArrowRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
