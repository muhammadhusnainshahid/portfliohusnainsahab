import {
  FaUserAlt,
  FaHeart,
  FaLanguage,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import InfoCard from "./InfoCard";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: false });
  const rightInView = useInView(rightRef, { once: false });

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ opacity: 1, x: -30 });
    }
  }, [leftInView]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({ opacity: 1, x: 30 });
    }
  }, [rightInView]);
  return (
    <section
      id="about"
      className="px-3 md:px-20 py-10 bg-gray-100 "
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        About <span className="text-blue-600">Me</span>
      </h2>
      <p className="text-center text-sm md:text-md text-gray-500 mb-10">
        Discover my journey, passions, and the story behind my work
      </p>

      <div className="flex flex-col md:flex-row items-start">
        {/* Left Side Image */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: 0 }}
          animate={leftControls}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:w-1/3 w-full ml-8 mb-5"
          whileHover={{ rotate: [0, 2, -2, 2, -2, 0] }}
        >
          <img
            src="/profile.jpg"
            alt="Hammad"
            className="rounded-lg shadow-lg w-40 h-40  md:w-72 md:h-72 object-cover"
          />
        </motion.div>

        {/* Right Grid Info */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 0 }}
          animate={rightControls}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/3"
        >
          {/* Bio */}
          <InfoCard
            icon={<FaUserAlt />}
            title="Bio"
            text="Passionate software engineer with over 5 years of experience in full-stack development. Dedicated to building user-friendly and scalable web applications."
            color="blue"
          />

          {/* Hobbies */}
          <InfoCard
            icon={<FaHeart />}
            title="Hobbies"
            text="Enjoy hiking, photography, reading science fiction, and contributing to open-source projects."
            color="green"
          />

          {/* Languages */}
          <InfoCard
            icon={<FaLanguage />}
            title="Languages"
            text="Fluent in English and Urdu. Learning Arabic and Japanese."
            color="orange"
          />

          {/* Contact */}
          <InfoCard
            icon={<FaPhoneAlt />}
            title="Contact"
            text={
              <>
                Email: hammad@example.com <br />
                Phone: +92-XXX-XXXXXXX <br />
                LinkedIn: linkedin.com/in/hammad
              </>
            }
            color="purple"
          />

          {/* Location */}
          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            text="Based in Lahore, Pakistan. Available for remote work worldwide."
            color="red"
          />

          {/* Education */}
          <InfoCard
            icon={<FaGraduationCap />}
            title="Education Summary"
            text="BS in Software Engineering (2016–2020). Full-Stack Bootcamp Graduate (2021)."
            color="teal"
          />

          <div className="flex flex-col md:flex-row gap-4 pr-10 text-gray-600 text-md items-center md:w-[500px]">
            <p className="text-gray-800 font-bold text-sm">Follow me on:</p>
            <div className="flex">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full w-8 h-8 shadow text-center hover:bg-black hover:text-white hover:scale-110 transform transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full w-8 h-8 shadow text-center hover:bg-black hover:text-white transform transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full w-8 h-8 shadow text-center hover:bg-black hover:text-white transform transition duration-300"
              >
                <FaTwitter />
              </a>
            </div>

            <a
              href="/hammadresume.pdf"
              download
              className="flex items-center gap-2 text-sm bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-white hover:text-black border  text-center transition duration-300 hover:scale-105"
            >
              <FaDownload className="text-base text-xs" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
