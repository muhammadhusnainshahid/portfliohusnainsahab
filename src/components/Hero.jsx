"use client";
import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
  FaCalendarAlt,
  FaCheckCircle,
  FaSmile,
  FaCodeBranch,
  FaArrowRight,
  FaInstagram,
  FaChevronDown,
  FaHeart,
  FaRocket,
  FaLightbulb
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-20">
      {/* Enhanced Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
      ></motion.div>
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 md:pt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: isMobile ? 0.4 : 0 }}
            className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left mt-8 lg:mt-0"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0.6 : 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Muhammad Husnain Shahid</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 0.8 : 0.4 }}
                className="h-8 md:h-10 lg:h-12 flex items-center justify-center lg:justify-start"
              >
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                  <Typewriter
                    words={[
                      "IT Professional",
                      "Flutter Developer",
                      "Web Developer",
                      "Digital Marketer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h2>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isMobile ? 1.0 : 0.6 }}
              className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build modern Flutter apps, blend psychology with technology, and love turning ideas into impact. Let's create something amazing together!
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isMobile ? 1.2 : 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
            >
              <p className="text-gray-800 font-medium text-sm md:text-base">Follow me:</p>
              <div className="flex items-center gap-3 md:gap-4 text-blue-600 text-xl md:text-2xl">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/muhammad-husnain-shahid-36b34b26b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/muhammadhusnainshahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:muhammad.bsit580@iiu.edu.pk"
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Send Email"
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isMobile ? 1.4 : 1.0 }}
              className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start mt-6 md:mt-8"
            >
              {/* Download CV Button */}
              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="/husnainre.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaDownload className="text-sm md:text-base" />
                <span className="text-sm md:text-base">Download CV</span>
                <FaArrowRight className="text-xs md:text-sm transform group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Contact Me Button */}
              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold bg-white hover:bg-blue-50 transition-all duration-300 group"
              >
                <FaPaperPlane className="text-sm md:text-base" />
                <span className="text-sm md:text-base">Contact Me</span>
                <FaArrowRight className="text-xs md:text-sm transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isMobile ? 1.6 : 1.2 }}
              className="mt-8 md:mt-12"
            >
              <p className="text-gray-800 font-bold text-base md:text-lg mb-4 md:mb-6 text-center lg:text-left">Achievements:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                {/* Years Experience */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-3 md:p-4 border border-gray-100"
                >
                  <div className="p-2 md:p-3 bg-blue-100 rounded-xl text-blue-600">
                    <FaCalendarAlt className="text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">1+</p>
                    <p className="text-gray-600 text-xs md:text-sm">Years Experience</p>
                  </div>
                </motion.div>

                {/* Projects Completed */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-3 md:p-4 border border-gray-100"
                >
                  <div className="p-2 md:p-3 bg-green-100 rounded-xl text-green-600">
                    <FaCheckCircle className="text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-gray-600 text-xs md:text-sm">Projects Completed</p>
                  </div>
                </motion.div>

                {/* Happy Clients */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-3 md:p-4 border border-gray-100"
                >
                  <div className="p-2 md:p-3 bg-yellow-100 rounded-xl text-yellow-600">
                    <FaSmile className="text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-gray-600 text-xs md:text-sm">Happy Clients</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-3 -left-3 w-24 h-24 bg-blue-200 rounded-full blur-xl"
              ></motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-3 -right-3 w-32 h-32 bg-purple-200 rounded-full blur-xl"
              ></motion.div>
              
              {/* Profile image container */}
              <div className="relative group">
                <motion.div 
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                ></motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl"
                >
                  <img
                    src="/profile.jpeg"
                    alt="Muhammad Husnain Shahid"
                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                  />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>
                
                {/* Floating elements - hidden on smallest screens */}
                {!isMobile && (
                  <>
                    <motion.div 
                      initial={{ y: 0 }}
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-green-100 rounded-lg text-green-600">
                          <FaCodeBranch className="text-xs" />
                        </div>
                        <p className="text-xs font-bold text-gray-800">IT Expert</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ y: 0 }}
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                      className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-blue-100 rounded-lg text-blue-600">
                          <FaCheckCircle className="text-xs" />
                        </div>
                        <p className="text-xs font-bold text-gray-800">Flutter Specialist</p>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-gray-600 text-xs mb-2">Scroll down</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500"
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        @media (max-width: 640px) {
          .bg-grid-pattern {
            background-size: 20px 20px;
          }
        }
      `}</style>
    </section>
  );
}