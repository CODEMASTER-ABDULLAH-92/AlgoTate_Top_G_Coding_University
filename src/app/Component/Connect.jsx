import Link from "next/link";
import React from "react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Globe,
  MessageSquare,
  AlertCircle,
  Sparkles,
  Zap,
  Heart
} from "lucide-react";

const Connect = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>

          <div className="relative">
            {/* Main content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left side - Main message */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle size={24} className="text-orange-400 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">
                    Found an Issue or Have a Suggestion?
                  </h3>
                </div>
                <p className="text-gray-300 text-lg mb-4">
                  If you found any mistake, fault, or have suggestions to improve this content, 
                  I'd love to hear from you. Your feedback helps make this resource better for everyone.
                </p>
                
                {/* CTA Button */}
                <Link 
                  href="https://www.linkedin.com/in/muhammad-abdullah-671bb7322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                >
                  <MessageSquare size={20} />
                  Connect with Me
                  <Sparkles size={16} className="animate-pulse" />
                </Link>
              </div>

              {/* Right side - Social links */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={20} className="text-yellow-400" />
                  <h4 className="text-lg font-semibold text-white">Connect via</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      icon: Linkedin, 
                      href: "https://www.linkedin.com/in/muhammad-abdullah-671bb7322/", 
                      label: "LinkedIn",
                      color: "text-blue-400 hover:text-blue-300 hover:bg-blue-500/20"
                    },
                    { 
                      icon: Github, 
                      href: "https://github.com/AbdullahFrontend", 
                      label: "GitHub",
                      color: "text-gray-300 hover:text-white hover:bg-gray-700/30"
                    },
                    { 
                      icon: Mail, 
                      href: "mailto:abdullahfrontend@gmail.com", 
                      label: "Email",
                      color: "text-red-400 hover:text-red-300 hover:bg-red-500/20"
                    },
                    { 
                      icon: Instagram, 
                      href: "https://instagram.com/abdullah.codes", 
                      label: "Instagram",
                      color: "text-pink-400 hover:text-pink-300 hover:bg-pink-500/20"
                    }
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                        <social.icon size={20} />
                      </div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>Made with passion to help developers learn and grow</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Every contribution, suggestion, or correction is valuable. Let's build better learning resources together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;