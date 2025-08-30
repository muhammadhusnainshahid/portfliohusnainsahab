"use client";
import { useState, useEffect } from "react";
import {
  FaCode,
  FaUserFriends,
  FaTools,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaMobile,
  FaFire,
  FaBrain,
  FaComments,
  FaUsers,
  FaSyncAlt,
  FaClock,
  FaCrown,
  FaNpm,
  FaFigma,
  FaServer,
  FaCloudUploadAlt,
  FaRocket,
  FaPaintBrush,
  FaRocketchat,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiHive, SiSqlite } from "react-icons/si";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState("technical");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const tabs = ["technical", "soft", "tools"];
  const labels = {
    technical: {
      label: "Technical",
      icon: <FaCode className="text-blue-600" />,
    },

    soft: {
      label: "Soft Skills",
      icon: <FaUserFriends className="text-blue-600" />,
    },

    tools: {
      label: "Tools",
      icon: <FaTools className="text-blue-600" />,
    },
  };
const technicalSkills = [
  {
    category: "Mobile Development",
    icon: FaMobile,
    skills: [
      { name: "Flutter", icon: SiFlutter, percent: 90 },
      { name: "Dart", icon: SiDart, percent: 88 },
      { name: "Firebase", icon: SiFirebase, percent: 85 },
      { name: "Java", icon: FaJava, percent: 80 },
    ],
  },
  {
    category: "Frontend Development",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact, percent: 50 },
      { name: "HTML", icon: FaHtml5, percent: 85 },
      { name: "CSS", icon: FaCss3Alt, percent: 80 },
      { name: "JavaScript", icon: FaJs, percent: 65 },
    ],
  },
  {
    category: "Backend Development",
    icon: FaNodeJs,
    skills: [
      { name: "REST APIs", icon: FaServer, percent: 82 },
      { name: "Hive", icon: SiHive, percent: 80 },
      { name: "SQLite", icon: SiSqlite, percent: 78 },
      ],
  },
  {
    category: "Database & Cloud",
    icon: FaCloud,
    skills: [
      { name: "MongoDB", icon: FaDatabase, percent: 65 },
      { name: "Git", icon: FaGitAlt, percent: 90 },
      { name: "GitHub", icon: FaGithub, percent: 88 },
    ],
  },
];  const softSkills = [
    {
      name: "Problem Solving",
      icon: FaBrain,
      description: "Approach complex issues with structured thinking.",
      proficiency: "Expert",
    },
    {
      name: "Communication",
      icon: FaComments,
      description: "Clearly express ideas to teams and clients.",
      proficiency: "Advanced",
    },
    {
      name: "Team Collaboration",
      icon: FaUsers,
      description: "Work effectively with cross-functional teams.",
      proficiency: "Advanced",
    },
    {
      name: "Adaptability",
      icon: FaSyncAlt,
      description: "Quickly learn and adjust to new technologies.",
      proficiency: "Advanced",
    },
    {
      name: "Time Management",
      icon: FaClock,
      description: "Meet deadlines and manage workload efficiently.",
      proficiency: "Proficient",
    },
    {
      name: "Leadership",
      icon: FaCrown,
      description: "Guide and support team growth and productivity.",
      proficiency: "Intermediate",
    },
  ];

  const tools = {
    development: [
      { name: "Git & GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "NPM", icon: FaNpm },
    ],
    design: [{ name: "Figma", icon: FaFigma }],
    testingDeployment: [
      { name: "Postman", icon: FaServer },
      { name: "MongoDB Compass", icon: FaDatabase },
      { name: "Vercel", icon: FaCloudUploadAlt },
      { name: "Netlify", icon: FaCloudUploadAlt },
      { name: "Render", icon: FaRocket },
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="skills"
      className="px-6 md:px-20 py-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        Skills & <span className="text-blue-600">Expertise</span>
      </h2>
      <p className="text-center text-sm md:text-md text-gray-500 mb-10">
        Explore my strengths across tech, tools, and mindset.
      </p>

      {/* Tabs */}
      <div className="relative w-fit mx-auto mb-10 bg-gray-100 p-1 rounded-full shadow-inner flex">
        {/* Sliding Background */}
        <span
          className={`absolute top-1 left-1 w-1/3 h-10 rounded-full bg-blue-600 transition-all duration-300 ${
            activeTab === "soft"
              ? "translate-x-full"
              : activeTab === "tools"
              ? "translate-x-[200%]"
              : "translate-x-0"
          }`}
        ></span>

        {/* Buttons */}
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            label={labels[tab].label}
            icon={labels[tab].icon}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === "technical" && (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {technicalSkills.map((section, i) => (
                <div key={i} className="shadow-lg  px-8 py-8 transform duration-300 hover:-translate-y-1 hover:shadow-blue-600">
                  {/* Category Heading with Icon */}
                  <div className="flex items-center gap-2 mb-4 ">
                    <div className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-800">
                      <section.icon className=" text-white" />
                    </div>
                    <h3 className="text-md font-semibold text-blue-600">
                      {section.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {section.skills.map((skill, index) => (
                      <div key={index}>
                        {/* Skill Name with Icon and % */}
                        <div className="flex justify-between items-center text-sm font-medium text-gray-800 mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className="text-base" />
                            <span>{skill.name}</span>
                          </div>
                          <span>{skill.percent}%</span>
                        </div>

                        {/* Thicker Progress Bar */}
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                            style={{
                              width: animate ? `${skill.percent}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "soft" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-100 p-4 rounded-lg shadow text-center space-y-2 transform duration-300 hover:-translate-y-1 hover:shadow-blue-600"
                >
                  <div className=" mx-auto text-xl rounded-full flex items-center justify-center w-8 h-8 bg-blue-800 text-white">
                    <skill.icon className="text-white text-md" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                  <span className="text-sm text-blue-600 font-medium">
                    {skill.proficiency}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "tools" && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Development Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-800">
                    <FaTools className=" text-white" />
                  </div>
                  <h3 className="text-md font-semibold text-blue-600">
                    Development Tools
                  </h3>
                </div>
                <div className="space-y-3 ">
                  {tools.development.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg shadow-sm transform duration-300 hover:-translate-y-1 hover:shadow-blue-600"
                    >
                      <tool.icon className="text-xl text-blue-600" />
                      <span className="text-gray-700 font-medium">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-800">
                    <FaPaintBrush className=" text-white" />
                  </div>
                  <h3 className="text-md font-semibold text-blue-600">
                    Design Tools
                  </h3>
                </div>
                <div className="space-y-3">
                  {tools.design.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg shadow-sm transform duration-300 hover:-translate-y-1 hover:shadow-blue-600"
                    >
                      <tool.icon className="text-xl text-blue-600" />
                      <span className="text-gray-700 font-medium">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing & Deployment Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-800">
                    <FaRocketchat className=" text-white" />
                  </div>
                  <h3 className="text-md font-semibold text-blue-600">
                    Testing & Deployement
                  </h3>
                </div>
                <div className="space-y-3">
                  {tools.testingDeployment.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg shadow-sm transform duration-300 hover:-translate-y-1 hover:shadow-blue-600"
                    >
                      <tool.icon className="text-xl text-blue-600" />
                      <span className="text-gray-700 font-medium">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function TabButton({ label, tab, activeTab, setActiveTab, icon }) {
  const isActive = activeTab === tab;

  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`relative z-10 w-[90px] md:w-40 h-10 text-xs md:text-sm px-2 font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
        isActive ? "text-white" : "text-gray-800"
      }`}
    >
      {React.cloneElement(icon, {
        className: `w-5 h-5 ${isActive ? "text-white" : "text-gray-600"}`,
      })}

      {label}
    </button>
  );
}
