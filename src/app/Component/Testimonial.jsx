"use client";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            y: 60,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      }
    });

    // Floating animation for cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      }
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Full Stack Developer",
      company: "TechCorp",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Code365 transformed my coding skills completely. The interactive challenges and real-world projects helped me land my dream job at a FAANG company!",
      highlight: "Landing my dream job"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "Frontend Engineer",
      company: "StartupXYZ",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The algorithm explanations are crystal clear. I went from struggling with basic patterns to solving complex DP problems with confidence.",
      highlight: "Mastering complex algorithms"
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Software Engineer",
      company: "DataSystems Inc",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Best investment in my career. The structured learning path and community support helped me transition from mechanical engineering to software development.",
      highlight: "Career transition success"
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "React Developer",
      company: "WebSolutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The modern tech stack coverage is incredible. I learned Next.js, TypeScript, and advanced React patterns that directly applied to my work projects.",
      highlight: "Modern tech stack mastery"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Backend Engineer",
      company: "CloudTech",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The system design section alone is worth it. I aced my technical interviews thanks to the comprehensive preparation materials.",
      highlight: "Acing technical interviews"
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Mobile Developer",
      company: "AppWorks",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As a self-taught developer, Code365 provided the structure I needed. The project-based approach built my portfolio and confidence simultaneously.",
      highlight: "Building portfolio & confidence"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.03)_25px,transparent_26px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div ref={titleRef} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Quote size={20} className="text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Loved by Developers
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join <span className="text-blue-400 font-semibold">10,000+ developers</span> who transformed their careers with our interactive learning platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-gray-900/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote size={16} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                {testimonial.text}
              </p>

              {/* Highlight */}
              <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
                {testimonial.highlight}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-blue-500/20">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Cyber Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.02)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.02)_25px,transparent_26px)] bg-[size:30px_30px] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Bottom Scan Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="text-center mt-16">
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Career Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
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
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;