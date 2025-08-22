"use client";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
  FaCalendarAlt,
  FaCheckCircle,
  FaSmile,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-12 py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-56 h-56 bg-blue-200 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl"
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 space-y-5 text-center md:text-left relative z-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Muhammad Husnain Shahid
          </span>
        </h1>

        <h2 className="text-md md:text-lg lg:text-xl font-semibold text-gray-700">
          <Typewriter
            words={[
              "IT Professional",
              "Flutter Developer",
              "Web Developer",
              "Digital Marketing",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
          I build modern Flutter apps, blend psychology with technology, and love turning ideas into impact. Let's create something amazing together!
        </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center md:justify-start items-center text-blue-600 text-xl"
        >
          <p className="text-gray-800 font-bold text-xs md:text-sm">Follow me:</p>
          <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://www.linkedin.com/in/muhammad-husnain-shahid-36b34b26b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://github.com/muhammadhusnainshahid" target="_blank" rel="noopener noreferrer"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2, y: -3 }} href="mailto:muhammad.bsit580@iiu.edu.pk"><FaEnvelope /></motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center md:justify-start mt-6"
        >
          <motion.a
            whileHover={{ y: -5 }}
            href="/husnainre.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <FaDownload /> Download CV
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            href="#contact"
            className="flex items-center gap-2 px-7 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold bg-white hover:bg-blue-50 transition-all"
          >
            <FaPaperPlane /> Contact Me
          </motion.a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
        >
          {[
            { icon: <FaCalendarAlt />, value: "1+", label: "Years Experience" },
            { icon: <FaCheckCircle />, value: "10+", label: "Projects Completed" },
            { icon: <FaSmile />, value: "10+", label: "Happy Clients" },
          ].map((stat, i) => (
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              key={i}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-3 border border-gray-100"
            >
              <div className="p-2 bg-blue-100 rounded-xl text-blue-600">{stat.icon}</div>
              <div>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-xs">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 mb-8 md:mb-0 flex justify-center relative z-10"
      >
        <div className="relative group">
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"
          ></motion.div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/profile.jpeg"
            alt="Muhammad Husnain Shahid"
            className="relative h-40 w-40 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full border-4 border-white shadow-2xl object-cover transform transition duration-700 group-hover:scale-110"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
