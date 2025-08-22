"use client";
import { useState } from "react";
import {
  FaMobile,
  FaFire,
  FaPalette,
  FaDatabase,
  FaRocket,
  FaSearch,
  FaChartLine,
  FaCode,
  FaTools,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      company: "Smart Tec Technology",
      position: "Flutter Developer",
      location: "Islamabad, Pakistan",
      period: "August 2024 - December 2024",
      icon: <FaMobile className="text-blue-500" />,
      tasks: [
        { 
          text: "Built responsive mobile apps using Flutter", 
          icon: <FaMobile className="text-blue-400" />
        },
        { 
          text: "Integrated Firebase for authentication & data management", 
          icon: <FaFire className="text-orange-400" />
        },
        { 
          text: "Designed clean, user-friendly UI/UX for better user experience", 
          icon: <FaPalette className="text-purple-400" />
        }
      ],
      achievements: [
        { 
          text: "Built databases and table structures for web applications", 
          icon: <FaDatabase className="text-green-400" />
        },
        { 
          text: "Proved successful working within tight deadlines and a fast-paced environment", 
          icon: <FaRocket className="text-red-400" />
        }
      ]
    },
    {
      company: "UCapacity Technology",
      position: "Flutter Developer",
      location: "Rawalpindi, Pakistan",
      period: "May 2024 - July 2024",
      icon: <FaMobile className="text-blue-500" />,
      tasks: [
        { 
          text: "Designed and implemented intuitive, user-friendly interfaces", 
          icon: <FaPalette className="text-purple-400" />
        },
        { 
          text: "Followed modern UI/UX principles to enhance the overall user experience", 
          icon: <FaPalette className="text-purple-400" />
        }
      ],
      achievements: [
        { 
          text: "Corrected, modified and upgraded software to improve performance", 
          icon: <FaTools className="text-yellow-400" />
        }
      ]
    },
    {
      company: "ES Desire Technology",
      position: "SEO/Data Listing",
      location: "Islamabad, Pakistan",
      period: "March 2023 - August 2023",
      icon: <FaSearch className="text-green-500" />,
      tasks: [
        { 
          text: "Optimized website content using SEO best practices to boost search engine rankings", 
          icon: <FaSearch className="text-green-400" />
        },
        { 
          text: "Conducted keyword research and implemented on-page strategies", 
          icon: <FaChartLine className="text-blue-400" />
        },
        { 
          text: "Analyzed site performance using Google Analytics and SEMrush", 
          icon: <FaChartLine className="text-blue-400" />
        },
        { 
          text: "Collaborated with cross-functional teams to ensure data consistency", 
          icon: <FaCode className="text-gray-400" />
        }
      ],
      achievements: [
        { 
          text: "Drove organic traffic and enhanced visibility and engagement", 
          icon: <FaChartLine className="text-blue-400" />
        }
      ]
    }
  ];

  return (
    <section id="experience" className="px-6 md:px-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2"
        >
          Work <span className="text-blue-600">Experience</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-sm md:text-md text-gray-500 mb-12"
        >
          My professional journey and contributions across different roles
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500 text-right">
                    <p>{exp.period}</p>
                    <p className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs" /> {exp.location}
                    </p>
                  </div>
                  {expandedItems[index] ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {expandedItems[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="mb-6 pt-4">
                        <h4 className="text-md font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaTools className="text-blue-500" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.tasks.map((task, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-lg mt-0.5">{task.icon}</span>
                              <span>{task.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaRocket className="text-green-500" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-lg mt-0.5">{achievement.icon}</span>
                              <span>{achievement.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}