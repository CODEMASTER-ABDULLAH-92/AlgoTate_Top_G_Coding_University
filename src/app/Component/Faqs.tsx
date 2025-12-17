"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Code365 and how does it work?",
      answer: "Code365 is a comprehensive platform designed to help developers enhance their coding skills through daily challenges and structured learning paths. We provide curated content, pattern recognition exercises, and a supportive community to help you grow as a developer."
    },
    {
      question: "How can the Striver Pattern Sheet help me?",
      answer: "The Striver Pattern Sheet is a carefully curated collection of coding patterns that frequently appear in technical interviews. By mastering these patterns, you'll be able to recognize problem types quickly and apply optimal solutions, significantly improving your problem-solving skills and interview performance."
    },
    {
      question: "Is Code365 suitable for beginners?",
      answer: "Absolutely! Code365 is designed for developers at all skill levels. We provide learning paths that start from fundamental concepts and gradually progress to advanced topics. Beginners can start with our basic pattern recognition exercises and build their skills step by step."
    },
    {
      question: "How often is new content added?",
      answer: "We add new challenges and content weekly to keep our platform fresh and aligned with industry trends. Our team consistently works on creating new pattern exercises, interview simulations, and learning materials to support your coding journey."
    },
    {
      question: "Can I track my progress on Code365?",
      answer: "Yes, we provide comprehensive progress tracking tools. You can monitor your performance across different pattern categories, track your streak of daily coding, and see how you're improving over time. Our analytics help identify your strengths and areas that need more practice."
    },
    {
      question: "What makes Code365 different from other coding platforms?",
      answer: "Code365 focuses specifically on pattern recognition - a crucial skill for technical interviews. While other platforms might offer random problems, we provide a structured approach to recognizing and solving patterns efficiently. Our content is curated by industry experts with experience at top tech companies."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-medium bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-orange-400 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="text-orange-400 flex-shrink-0 ml-4" />
              )}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;