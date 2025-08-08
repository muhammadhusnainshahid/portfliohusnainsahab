"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <section id="contact" className="px-6 md:px-20 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        Contact <span className="text-blue-600">Me</span>
      </h2>
      <p className="text-center text-sm md:text-md text-gray-500 mb-10">Let’s get connected</p>

      <div className="relative w-fit mx-auto mb-10 bg-gray-100 p-1 px-2 rounded-full shadow-inner flex">
        {/* Sliding Blue Background */}
        <span
          className={`absolute top-1 left-1 w-1/2 h-10 rounded-full bg-blue-600 transition-all duration-300 ${
            activeTab === "methods" ? "translate-x-full" : "translate-x-0"
          }`}
        ></span>

        {/* Button 1: Contact Form */}
        <button
          onClick={() => setActiveTab("form")}
          className={`relative z-10 w-[120px] md:w-40 h-10 text-xs md:text-sm font-medium rounded-full transition-all duration-300 px-2 flex items-center justify-center gap-2 ${
            activeTab === "form" ? "text-white" : "text-gray-800"
          }`}
        >
          <FaEnvelope
            className={`text-base ${
              activeTab === "form" ? "text-white" : "text-blue-600"
            }`}
          />
          Contact Form
        </button>

        {/* Button 2: Contact Methods */}
        <button
          onClick={() => setActiveTab("methods")}
          className={`pl-3 relative z-10 w-[120px] md:w-40 h-10 text-xs md:text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === "methods" ? "text-white" : "text-gray-800"
          }`}
        >
          <FaPhoneAlt
            className={`text-base ${
              activeTab === "methods" ? "text-white" : "text-blue-600"
            }`}
          />
          Contact Methods
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "form" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <FormView />
          </motion.div>
        ) : (
          <motion.div
            key="methods"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <MethodsView />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Contact Form Component
function FormView() {
  return (
    <form className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="you@email.com"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Your message..."
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}

// Contact Info + Social Links
function MethodsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Email Card */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl">
            <FaEnvelope />
          </div>
        </div>
        <h4 className="font-bold text-gray-800 mb-1">Email</h4>
        <p className="text-gray-600 text-sm">hammad@example.com</p>
      </div>

      {/* Social Media Card */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-purple-100 text-purple-600 p-3 rounded-full text-xl">
            <FaLinkedin />
          </div>
        </div>
        <h4 className="font-bold text-gray-800 mb-3">Social Media</h4>
        <div className="flex justify-center gap-4 text-2xl text-gray-600">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Phone Card */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-full text-xl">
            <FaPhoneAlt />
          </div>
        </div>
        <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
        <p className="text-gray-600 text-sm">+92-XXX-XXXXXXX</p>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow">
      <div className="text-blue-600 text-xl mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
