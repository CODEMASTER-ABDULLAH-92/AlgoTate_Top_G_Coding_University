"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Users,
  Star,
  Copy,
  Check,
  ChevronLeft,
  Lock,
  Maximize,
  Minimize,
  Settings,
  Captions,
  PictureInPicture,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProblemSolutionPage = ({
  problem,
  companies,
  approach,
  codeSolution,
  vid,
}) => {
  const [activeTab, setActiveTab] = useState("problem");
  const [copied, setCopied] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLocked, setIsVideoLocked] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);

  const contentRef = useRef(null);
  const videoRef = useRef < HTMLVideoElement > null;
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const videoContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    // Animate elements on page load
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );

    gsap.fromTo(
      contentRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power2.out" }
    );

    gsap.fromTo(
      videoContainerRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.6, ease: "back.out(1.7)" }
    );

    // Hide controls after 3 seconds of inactivity
    const setupControlsTimeout = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    if (videoContainerRef.current) {
      videoContainerRef.current.addEventListener("mousemove", () => {
        setShowControls(true);
        setupControlsTimeout();
      });

      setupControlsTimeout();
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(codeSolution);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const unlockVideo = () => {
    setIsVideoLocked(false);
    playVideo();
  };

  const toggleVideoSize = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const togglePlayPause = () => {
    if (isVideoLocked) {
      unlockVideo();
      return;
    }

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // Sync play state with video events
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current || isVideoLocked) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * duration;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const changePlaybackRate = () => {
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    const newRate = rates[nextIndex];

    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-white/10 py-4 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition"
        >
          <ChevronLeft size={20} />
          Back to Problems
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content - Problem and Solution */}
        <div className="lg:col-span-2 space-y-8">
          {/* Problem Header */}
          <div ref={titleRef} className="space-y-4">
            <h1 className="text-4xl font-bold">{problem.title}</h1>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  problem.difficulty === "Easy"
                    ? "bg-green-500/20 text-green-400"
                    : problem.difficulty === "Medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {problem.difficulty}
              </span>
              <div
                ref={statsRef}
                className="flex items-center gap-6 text-gray-400"
              >
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" />
                  <span>4.8</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-blue-500" />
                  <span>12.4k solved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-white/10">
            <div className="flex gap-8">
              <button
                className={`pb-3 font-medium border-b-2 transition ${
                  activeTab === "problem"
                    ? "border-orange-500 text-orange-400"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("problem")}
              >
                Problem Description
              </button>
              <button
                className={`pb-3 font-medium border-b-2 transition ${
                  activeTab === "solution"
                    ? "border-orange-500 text-orange-400"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("solution")}
              >
                Solution
              </button>
              <button
                className={`pb-3 font-medium border-b-2 transition ${
                  activeTab === "approach"
                    ? "border-orange-500 text-orange-400"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("approach")}
              >
                Approach
              </button>
              <button
                className={`pb-3 font-medium border-b-2 transition ${
                  activeTab === "companies"
                    ? "border-orange-500 text-orange-400"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("companies")}
              >
                Companies
              </button>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            {activeTab === "problem" ? (
              <>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Examples</h3>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg mb-4">
                      <p className="font-semibold">Example {index + 1}:</p>

                  <span className="text-gray-400">Input: </span>
                      <pre className="text-sm mt-1 whitespace-pre-wrap">
                        {example.input}
                      </pre>
                      <p>
                        <span className="text-gray-400">Output: </span>
                        {example.output}
                      </p>
                      <p className="mt-2 text-gray-300">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : activeTab === "solution" ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">TypeScript Solution</h3>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-green-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-5 overflow-x-auto">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <pre className="font-mono text-sm whitespace-pre-wrap">
                    {codeSolution}
                  </pre>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Time Complexity: O(n)
                  </h4>
                  <p className="text-gray-300">
                    We traverse the list containing n elements only once. Each
                    lookup in the hash table costs O(1) time.
                  </p>

                  <h4 className="font-semibold text-blue-400 mt-4 mb-2">
                    Space Complexity: O(n)
                  </h4>
                  <p className="text-gray-300">
                    The extra space required depends on the number of items
                    stored in the hash table, which stores at most n elements.
                  </p>
                </div>
              </div>
            ) : activeTab === "approach" ? (
              <div className="space-y-10">
                {Array.isArray(approach) ? (
                  approach.map((appr, index) => (
                    <div key={index} className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          {appr.title ?? `Approach ${index + 1}`}
                        </h3>
                        <div className="bg-white/5 p-5 rounded-xl">
                          <h4 className="font-semibold text-orange-400 mb-3">
                            Steps:
                          </h4>
                          <ol className="list-decimal list-inside space-y-2">
                            {appr.steps?.map((step, i) => (
                              <li key={i} className="text-gray-300">
                                {step}
                              </li>
                            )) ?? <li>No steps provided</li>}
                          </ol>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                          <h4 className="font-semibold text-green-400 mb-2">
                            Time Complexity
                          </h4>
                          <p className="text-2xl font-bold">
                            {appr.complexity?.time ?? "N/A"}
                          </p>
                          <p className="text-gray-300 mt-2">
                            {appr.complexity?.time
                              ? "Time complexity relative to input size"
                              : "Not specified"}
                          </p>
                        </div>

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">
                            Space Complexity
                          </h4>
                          <p className="text-2xl font-bold">
                            {appr.complexity?.space ?? "N/A"}
                          </p>
                          <p className="text-gray-300 mt-2">
                            {appr.complexity?.space
                              ? "Space complexity relative to input size"
                              : "Not specified"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No approach provided.</p>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Companies Asking This Question
                  </h3>
                  <p className="text-gray-300 mb-4">
                    This problem is frequently asked by top tech companies
                    during interviews.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {companies.map((company, index) => (
                      <div
                        key={index}
                        className="bg-white/5 p-4 rounded-xl flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                            <span className="font-bold">{company.logo}</span>
                          </div>
                          <span className="font-semibold">{company.name}</span>
                        </div>
                        <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm">
                          {company.frequency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Interview Tips
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Practice explaining your thought process out loud</li>
                    <li>
                      Consider edge cases (empty array, no solution, multiple
                      solutions)
                    </li>
                    <li>Discuss time and space complexity trade-offs</li>
                    <li>Ask clarifying questions about input constraints</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Video Player */}
      {/* //  This is the Premium user Code adding Later */}
      {/* // This the rigth section code part */}



      
      </div>
    </div>
  );
};

export default ProblemSolutionPage;







// <div
//   className={`lg:col-span-1 ${
//     isVideoExpanded
//       ? "fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
//       : ""
//   }`}
// >
//   <div
//     ref={videoContainerRef}
//     className={`space-y-6 ${
//       isVideoExpanded
//         ? "w-full h-full max-w-6xl flex flex-col"
//         : "sticky top-24"
//     }`}
//   >
//     <div
//       className={`bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl ${
//         isVideoExpanded ? "flex-1 flex flex-col" : ""
//       }`}
//     >
//       <div
//         className={`relative bg-black rounded-lg overflow-hidden mb-4 ${
//           isVideoExpanded ? "flex-1" : "aspect-video"
//         }`}
//         onDoubleClick={toggleVideoSize}
//       >
//         {/* Video Player */}
//         <video
//           ref={videoRef}
//           className="w-full h-full object-contain"
//           onTimeUpdate={handleTimeUpdate}
//           onLoadedMetadata={handleTimeUpdate}
//           onEnded={() => setIsVideoPlaying(false)}
//         >
//           <source src={vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {isVideoLocked ? (
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-orange-900/70 flex items-center justify-center flex-col p-6">
//             <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
//               <Lock size={32} className="text-orange-400" />
//             </div>
//             <p className="font-semibold text-xl mb-2 text-center">
//               Video Solution Locked
//             </p>
//             <p className="text-gray-300 mb-6 text-center max-w-md">
//               Upgrade to Pro to unlock all video solutions and enhance
//               your learning experience
//             </p>
//             <button
//               onClick={unlockVideo}
//               className="bg-orange-500 hover:bg-orange-600 py-3 px-8 rounded-lg font-semibold transition text-lg"
//             >
//               Unlock Video
//             </button>
//           </div>
//         ) : (
//           <>
//             {/* Video Overlay Controls */}
//             <div
//               className={`absolute inset-0 transition-opacity duration-300 ${
//                 showControls ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {/* Top Controls */}
//               <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center">
//                 <h3 className="font-semibold">
//                   Two Sum Solution Explained
//                 </h3>
//                 <button
//                   onClick={toggleVideoSize}
//                   className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
//                 >
//                   {isVideoExpanded ? (
//                     <Minimize size={20} />
//                   ) : (
//                     <Maximize size={20} />
//                   )}
//                 </button>
//               </div>

//               {/* Center Play Button */}
//               {!isVideoPlaying && (
//                 <button
//                   onClick={togglePlayPause}
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
//                 >
//                   <Play size={32} className="ml-1 text-white" />
//                 </button>
//               )}

//               {/* Bottom Controls */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                 {/* Progress Bar */}
//                 <div
//                   className="h-1.5 w-full bg-white/30 rounded-full mb-3 cursor-pointer"
//                   onClick={handleSeek}
//                 >
//                   <div
//                     className="h-full bg-orange-500 rounded-full"
//                     style={{
//                       width: `${(currentTime / duration) * 100}%`,
//                     }}
//                   ></div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <button
//                       onClick={togglePlayPause}
//                       className="p-1 hover:text-orange-400 transition"
//                     >
//                       {isVideoPlaying ? (
//                         <Pause size={20} />
//                       ) : (
//                         <Play size={20} />
//                       )}
//                     </button>

//                     <button
//                       onClick={toggleMute}
//                       className="p-1 hover:text-orange-400 transition"
//                     >
//                       {isMuted ? (
//                         <VolumeX size={20} />
//                       ) : (
//                         <Volume2 size={20} />
//                       )}
//                     </button>

//                     <div className="text-sm">
//                       {formatTime(currentTime)} / {formatTime(duration)}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={changePlaybackRate}
//                       className="text-sm hover:text-orange-400 transition px-2 py-1 bg-white/10 rounded"
//                     >
//                       {playbackRate}x
//                     </button>

//                     <button className="p-1 hover:text-orange-400 transition">
//                       <Settings size={20} />
//                     </button>

//                     <button className="p-1 hover:text-orange-400 transition">
//                       <Captions size={20} />
//                     </button>

//                     <button className="p-1 hover:text-orange-400 transition">
//                       <PictureInPicture size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {!isVideoExpanded && (
//         <div className="space-y-4">
//           <div>
//             <h3 className="font-semibold mb-2">Video Solutions</h3>
//             <div className="space-y-2">
//               <button
//                 className="w-full text-left px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center gap-3"
//                 onClick={unlockVideo}
//               >
//                 {isVideoLocked ? (
//                   <Lock size={16} className="text-orange-400" />
//                 ) : (
//                   <Play size={16} className="text-orange-400" />
//                 )}
//                 <span>TypeScript Solution (15:24)</span>
//               </button>
//               <button className="w-full text-left px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center gap-3">
//                 <Lock size={16} className="text-orange-400" />
//                 <span>JavaScript Solution (12:41)</span>
//               </button>
//               <button className="w-full text-left px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center gap-3">
//                 <Lock size={16} className="text-orange-400" />
//                 <span>C++ Solution (18:07)</span>
//               </button>
//             </div>
//           </div>

//           <div className="pt-4 border-t border-white/10">
//             <h3 className="font-semibold mb-2">Related Problems</h3>
//             <div className="space-y-2">
//               <Link
//                 href="#"
//                 className="block px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
//               >
//                 <div className="flex justify-between items-center">
//                   <span>Three Sum</span>
//                   <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
//                     Medium
//                   </span>
//                 </div>
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
//               >
//                 <div className="flex justify-between items-center">
//                   <span>Four Sum</span>
//                   <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
//                     Hard
//                   </span>
//                 </div>
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
//               >
//                 <div className="flex justify-between items-center">
//                   <span>Two Sum II</span>
//                   <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
//                     Easy
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//     {!isVideoExpanded && (
//       <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-5">
//         <h3 className="font-semibold mb-3">Upgrade to Pro</h3>
//         <p className="text-sm text-gray-300 mb-4">
//           Unlock all premium content and enhanced learning features
//         </p>
//         <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 py-2.5 rounded-lg font-semibold hover:from-orange-500 hover:to-pink-600 transition">
//           Upgrade Now
//         </button>
//       </div>
//     )}
//   </div>
// </div>
