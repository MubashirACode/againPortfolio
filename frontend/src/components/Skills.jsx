import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import tailwind from "../assets/tailwind.png";
import n8n from "../assets/n8n.png";
import ghl from "../assets/ghl.jpg";

const GLOW_COLOR = "#22D3EE";

const skills = [
  { icon: html, label: "HTML" },
  { icon: css, label: "CSS" },
  { icon: js, label: "JavaScript" },
  { icon: react, label: "React" },
  { icon: next, label: "Next.js" },
  { icon: node, label: "Node.js" },
  { icon: mongo, label: "MongoDB" },
  { icon: tailwind, label: "Tailwind" },
  { icon: n8n, label: "n8n" },
  { icon: ghl, label: "GoHighLevel" },
];

const SkillCard = ({ icon, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl p-[2px] overflow-hidden group"
    >
      {/* Traveling light border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1/2 w-[200%] h-[200%]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 82%, ${GLOW_COLOR} 92%, #ffffff 96%, ${GLOW_COLOR} 100%)`,
        }}
      />

      {/* Soft glow, brighter on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-70"
        style={{ boxShadow: `0 0 25px ${GLOW_COLOR}66` }}
      />

      {/* Card content */}
      <div className="relative bg-black rounded-2xl p-5 h-full flex flex-col items-center justify-center gap-3">
        <img
          src={icon}
          alt={label}
          className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md"
        />
        <p className="text-white/80 text-sm font-medium text-center">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-transparent px-6 md:px-12 lg:px-20 py-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium mb-2"
            style={{ color: GLOW_COLOR }}
          >
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.label} index={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};