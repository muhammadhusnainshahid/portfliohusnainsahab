import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaSmile,
  FaCodeBranch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-3 md:px-10 py-10"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Hi, I’m <span className="text-blue-600">Husnain Shahid</span>
        </h1>
        <h2 className="text-md md:text-md font-semibold text-gray-600">
          <Typewriter
            words={[
              "Flutter Developer",
              "Web Developer",
              "IT Professional",
              "React Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-600 text-sm">
          I build modern Flutter  apps, blend psychology with technology, and love
          turning ideas into impact. Let’s connect!
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start items-center text-blue-600 text-xl">
          <p className="text-gray-800 font-bold text-xs md:text-sm">Follow me on:</p>
          <a
            href="https://www.linkedin.com/in/muhammad-husnain-shahid-36b34b26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/muhammadhusnainshahid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="muhammad.bsit580@iiu.edu.pk">
            <FaEnvelope />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center md:justify-start mt-6">
          {/* Download CV Button */}
          <a
            href="/husnainre.pdf"
            download
            className="text-sm flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaDownload className="text-base" />
            Download CV
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="text-sm flex items-center gap-2 px-9 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold bg-white hover:bg-blue-50 transition duration-300"
          >
            <FaPaperPlane className="text-base" />
            Contact Me
          </a>
        </div>

        <div>
          <p className="text-gray-800 font-bold text-sm">Quick Stats:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-center md:justify-start">
          {/* Years Experience */}
          <div className="flex items-center justify-center gap-4 bg-white rounded-full shadow-md px-6 py-2 w-full">
            <div className="text-blue-600 text-sm">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-600">2+</p>
              <p className="text-gray-600 text-[10px]">Years Experience</p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="flex items-center justify-center gap-2 bg-white rounded-full shadow-md px-4 py-2 w-full">
            <div className="text-blue-600 text-sm">
              <FaCheckCircle />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-600">10+</p>
              <p className="text-gray-600 text-[10px]">Projects Completed</p>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="flex items-center justify-center gap-4 bg-white rounded-full shadow-md px-6 py-2 w-full">
            <div className="text-blue-600 text-sm">
              <FaSmile />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-600">5+</p>
              <p className="text-gray-600 text-[10px]">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <div className="group md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-blue-300 shadow-lg w-40 h-40 mt-5 md:mb-5">
          <img
            src="/profile.jpg"
            alt="Usama"
            className="w-40 h-40 md:h-72 md:w-72 object-cover rounded-full transform transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.section>
  );
}
