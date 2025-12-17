"use client";
import Image from "next/image";
import abd from "../../../public/ab.jpeg"
import ali from "../../../public/ali.jpeg"
import { useState, useEffect } from "react";

import {
  Github,
  Linkedin,
  Clock,
  Rocket,
  Star,
} from "lucide-react";
import { image } from "motion/react-client";

const team = {
  me: {
    name: "Muhammad Abdullah",
    role: "Full-Stack Engineer | Next.js & MERN Specialist",
    image: abd,
    bio: "Results-driven full-stack engineer with strong expertise in Next.js and the MERN stack. Focused on building high-performance, scalable web applications with clean architecture and modern best practices.",
    experience: "4+ Years",
    projects: "10+ Projects",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Authentication & Security"
    ],
    links: {
      github: "#",
      linkedin: "#",
    },
  },

  cousin: {
    name: "Ali Raza",
    role: "Senior Full-Stack Developer | Backend & System Architecture",
    image: ali,
    bio: "Highly experienced full-stack developer specializing in backend engineering, scalable APIs, and database-driven systems. Strong focus on performance, reliability, and maintainable codebases.",
    experience: "5+ Years",
    projects: "20+ Projects",
    stack: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "System Design",
      "Microservices",
      "API Development",
      "CI/CD Pipelines"
    ],
    links: {
      github: "#",
      linkedin: "#",
    },
  },
};


export default function DevTeam() {
  const [active, setActive] = useState("me");
  const member = team[active];

useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev === "me" ? "cousin" : "me"));
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Our Dev Team</h1>
          <p className="text-gray-400">
            Two developers. One vision. Building practical learning platforms.
          </p>
        </div>


        {/* Member Card */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/5 border border-white/10 rounded-3xl p-8">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="text-blue-400 font-medium">{member.role}</p>
            <p className="text-gray-300">{member.bio}</p>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{member.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>{member.projects}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {member.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a href={member.links.github} target="_blank">
                <Github className="w-6 h-6 hover:text-gray-300" />
              </a>
              <a href={member.links.linkedin} target="_blank">
                <Linkedin className="w-6 h-6 text-blue-400 hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-14 text-gray-400">
          <Star className="inline w-5 h-5 text-yellow-400 mr-2" />
          Built by developers, for developers.
        </div>

      </div>
    </section>
  );
}
