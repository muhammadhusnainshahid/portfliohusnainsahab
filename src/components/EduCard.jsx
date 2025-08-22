"use client";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function EduCard({
  icon,
  title,
  degree,
  institution,
  description,
  location,
  years,
  gpa,
  status,
  courses,
  achievements,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-3 text-blue-600 text-2xl">
        <div className="rounded-full flex items-center justify-center w-8 h-8 text-white bg-blue-800 text-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-[15px]">{degree}</p>
          <p className="text-sm text-gray-600 mt-1">{institution}</p>
          <div className="flex gap-5 items-center mt-1">
            <div className="flex items-center justify-center gap-1.5 text-gray-500">
              <FaCalendarAlt className="text-[11px]" />
              <p className="text-[11px] text-gray-500 mt-0.5">{years}</p>
            </div>
            <div className="flex items-center text-gray-500 gap-1.5">
              <FaMapMarkerAlt className="text-[11px]" />
              <p className="text-[11px] text-gray-500 mt-0.5">{location}</p>
            </div>
          </div>
          <div className="text-sm mt-1 flex items-center gap-2">
            <span className="text-[12px] font-medium">GPA: {gpa}</span> 
            <span className="text-[12px] rounded-full bg-green-200 px-4 py-1 text-green-800 font-medium">{status}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-xs text-gray-600 space-y-1 leading-relaxed">{description}</p>
      </div>

      {/* Courses */}
      <div>
        <h4 className="font-semibold text-gray-700 text-sm mt-2 mb-1">
          Key Courses:
        </h4>
        <div className="flex flex-wrap gap-2">
          {courses.map((c, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="font-semibold text-gray-700 text-sm mb-1">
          Notable Achievements:
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 leading-relaxed">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}