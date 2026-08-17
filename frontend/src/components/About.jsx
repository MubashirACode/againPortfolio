import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiEye, FiDownload } from "react-icons/fi";
import { PiGraduationCapLight } from "react-icons/pi";

import aboutImage from "../assets/images.jpg";

const GLOW_COLOR = "#22D3EE";

const infoCards = [
  {
    icon: <FiCode size={20} />,
    title: "Languages",
    desc: "HTML, CSS, JavaScript, React Js, Node Js",
  },
  {
    icon: <PiGraduationCapLight size={22} />,
    title: "Education",
    desc: "DAE Software Engineering",
  },
  {
    icon: <FiBriefcase size={20} />,
    title: "Projects",
    desc: "Built more than 10+ projects",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-transparent px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-medium mb-2"
            style={{ color: GLOW_COLOR }}
          >
            Introduction
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16">
          {/* Left: Image with traveling light border */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl p-[2px] overflow-hidden">
              {/* Traveling light — rotates behind, only the thin edge is visible */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1/2 w-[200%] h-[200%]"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0%, transparent 82%, ${GLOW_COLOR} 92%, #ffffff 96%, ${GLOW_COLOR} 100%)`,
                }}
              />

              {/* Soft outer glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: `0 0 30px ${GLOW_COLOR}66` }}
              />

              {/* Image sits on top, masking everything except the thin border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                <img
                  src={aboutImage}
                  alt="Mubashir Ali"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Rotating circular badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-black border border-white/15 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="8" fill={GLOW_COLOR} letterSpacing="1.2">
                  <textPath href="#circlePath" startOffset="0%">
                    MERN STACK DEVELOPER • MERN STACK DEVELOPER •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 max-w-xl"
          >
            <p className="text-white/70 text-base leading-relaxed mb-8">
              I'm a MERN Stack Web Developer with 1.5+ years of hands-on
              experience building and maintaining full-stack web
              applications using MongoDB, Express, React, and Node.js. I
              automate workflows with n8n and design websites and funnels
              with GoHighLevel, and I apply AI tools to speed up development
              and improve project outcomes. Comfortable in fast-paced agency
              environments, collaborating across teams.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-white/15 rounded-2xl p-4 hover:border-white/30 transition-colors"
                >
                  <div style={{ color: GLOW_COLOR }} className="mb-3">
                    {card.icon}
                  </div>
                  <p className="text-white font-semibold text-sm mb-1.5">
                    {card.title}
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume buttons with traveling light border */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "View Resume", icon: <FiEye size={16} />, href:"/mubashir.pdf", download: false },
                { label: "Download Resume", icon: <FiDownload size={16} />, href: "/mubashir.pdf", download: true },
              ].map((btn) => (
                <div
                  key={btn.label}
                  className="relative rounded-full p-[2px] overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1/2 w-[200%] h-[200%]"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, transparent 82%, ${GLOW_COLOR} 92%, #ffffff 96%, ${GLOW_COLOR} 100%)`,
                    }}
                  />
                  <a
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={btn.download}
                    className="relative flex items-center gap-2 bg-black rounded-full px-6 py-3 text-sm font-medium text-white hover:text-white/90 transition-colors"
                  >
                    {btn.label}
                    {btn.icon}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};