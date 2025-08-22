"use client";
import { useState } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaAward,
  FaCode,
  FaFacebookF,
  FaGoogle,
  FaReact,
  FaFreeCodeCamp,
  FaAws,
  FaMicrosoft,
  FaLinux,
} from "react-icons/fa";
import EduCard from "./EduCard";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const [activeTab, setActiveTab] = useState("formal");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="education"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-3 md:px-20 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Educational <span className="text-blue-600">Background</span>
      </h2>
      <p className="text-center text-sm md:text-md text-gray-500 mb-10">
        My academic journey and continuous learning path in computer science and
        web development
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts lower (y: 50)
        animate={{ opacity: 1, y: 0 }} // Animates to normal position
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-fit mx-auto mb-8 bg-gray-100 p-1 rounded-full shadow-inner flex"
      >
        {/* Sliding Background */}
        <span
          className={`absolute top-1 left-1 w-1/2 h-10 rounded-full bg-blue-600 transition-all duration-300 ${
            activeTab === "cert" ? "translate-x-full" : "translate-x-0"
          }`}
        ></span>

        {/* Buttons */}
        <button
          onClick={() => setActiveTab("formal")}
          className={`relative z-10 w-[140px] md:w-40 h-10 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
            activeTab === "formal" ? "text-white" : "text-gray-800"
          }`}
        >
          Formal Education
        </button>

        <button
          onClick={() => setActiveTab("cert")}
          className={`relative z-10 w-[140px] md:40 h-10 text-xs md:text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === "cert" ? "text-white" : "text-gray-800"
          }`}
        >
          <FaAward className="text-base" />
          Certifications
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Content */}
        {activeTab === "formal" ? (
          <motion.div
            key="formal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Degree Card */}
            <EduCard
              icon={<FaGraduationCap />}
              title="Bachelor of Information Technology"
              degree="Information Technology"
              institution="International Islamic University"
              description="Passionate and detail-oriented IT developer with a strong foundation in Flutter development. Experienced in building responsive, high-performance applications using modern technologies like Flutter,React.js, Next.js, Node.js, and MongoDB."
              location="Islamabad, Pakistan"
              years="2020 - 2024"
              gpa="3.14/4.00"
              status="Graduated"
              courses={[
                "Data Structures",
                "Algorithms",
                "Software Engineering",
                "Mobile Programming",
                "Web Development",
                "Flutter Developer"
              ]}
              achievements={[
                "Dean's List for 6 Semesters",
                "Capstone Project Award",
                "2nd Place in Hackathon",
              ]}
            />
            {/* Bootcamp Card */}
          EduCard(
  icon: Icon(Icons.code), // Using Flutter's built-in icons
  title: "Flutter Developer",
  degree: "Intensive Bootcamp", 
  institution: "Flutter Bootcamp – Online",
  description: "Passionate and detail-oriented software developer with a strong foundation in Flutter development. Experienced in building responsive, high-performance cross-platform applications using Dart, Flutter framework, Firebase, and state management solutions like Provider and Bloc.",
  location: "Remote",
  years: "2024",
  gpa: "Outstanding",
  status: "Certified",
  courses: [
    "Dart Programming",
    "Flutter Framework",
    "Firebase Integration",
    "State Management (Provider/Bloc)",
    "RESTful APIs",
    "App Deployment",
    "UI/UX Design Principles",
  ],
)
              achievements={[
                "Top 10% in class",
                "Built and deployed 5 projects",
                "Mentored junior developers",
              ]}
            />
          </motion.div>
        ) : (
          <motion.div
            key="cert"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 "
          >
            {[
              {
                logo: (
                  <FaFacebookF className="bg-[#1877F2] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "Meta Front-End Developer",
                provider: "Coursera",
                year: "2024",
              },
              {
                logo: (
                  <FaGoogle className="bg-[#DB4437] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "Google UX Design",
                provider: "Coursera",
                year: "2023",
              },
              {
                logo: (
                  <FaReact className="bg-[#5d068f] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "React + TypeScript",
                provider: "Udemy",
                year: "2022",
              },
              {
                logo: (
                  <FaFreeCodeCamp className="bg-[#0e7760] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "Responsive Web Design",
                provider: "freeCodeCamp",
                year: "2021",
              },
              {
                logo: (
                  <FaAws className="bg-[#FF9900] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "AWS Cloud Practitioner",
                provider: "Amazon",
                year: "2024",
              },
              {
                logo: (
                  <FaMicrosoft className="bg-[#0078D4] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "Microsoft Azure Fundamentals",
                provider: "Microsoft",
                year: "2023",
              },
              {
                logo: (
                  <FaLinux className="bg-[#FCC624] w-8 h-8 rounded-full p-1 text-black" />
                ),
                title: "Linux for Developers",
                provider: "Linux Foundation",
                year: "2022",
              },
              {
                logo: (
                  <FaGraduationCap className="bg-[#2A73CC] w-8 h-8 rounded-full p-1 text-white" />
                ),
                title: "Foundations of User Experience (UX)",
                provider: "Coursera",
                year: "2021",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center space-y-3 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-black"
              >
                <div>{cert.logo}</div>

                <h3 className="font-semibold text-gray-800 text-sm">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-xs">{cert.provider}</p>
                <span className="text-xs text-green-600 font-semibold rounded-full bg-green-200 px-2">
                  {cert.year}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
