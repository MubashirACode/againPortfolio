import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { portfolioData } from "../assets/data.js";

const GLOW_COLOR = "#22D3EE";

const ProjectCard = ({ title, description, image, liveLink, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
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
        style={{ boxShadow: `0 0 30px ${GLOW_COLOR}66` }}
      />

      {/* Card content */}
      <div className="relative bg-black rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Text */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-white text-base font-semibold mb-2">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
            {description}
          </p>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium w-fit px-4 py-2 rounded-full border border-white/15 hover:border-white/30 transition-colors"
            style={{ color: GLOW_COLOR }}
          >
            Live Demo
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section
      id="work"
      className="relative w-full min-h-screen bg-transparent px-6 md:px-12 lg:px-20 py-24"
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
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};