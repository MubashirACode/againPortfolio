import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiFilter } from "react-icons/fi";
import { TbBolt } from "react-icons/tb";

const GLOW_COLOR = "#22D3EE";

const services = [
  {
    icon: <FiCode size={26} />,
    title: "Web Development",
    desc: "Full-stack web applications built with the MERN stack  MongoDB, Express, React, and Node.js  scalable, fast, and production-ready.",
  },
  {
    icon: <FiFilter size={26} />,
    title: "GHL Funnel",
    desc: "High-converting funnels and  on GoHighLevel  landing pages",
  },
  {
    icon: <FiLayout size={26} />,
    title: "Web Design",
    desc: "Clean, modern, and responsive website design focused on user experience, performance, and brand consistency across devices.",
  },
  {
    icon: <TbBolt size={26} />,
    title: "Automation (n8n)",
    desc: "Custom n8n workflows that automate repetitive tasks, connect your tools, and save hours of manual work every week.",
  },
];

const ServiceCard = ({ icon, title, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-40 group-hover:opacity-80"
        style={{ boxShadow: `0 0 30px ${GLOW_COLOR}66` }}
      />

      {/* Card content */}
      <div className="relative bg-black rounded-2xl p-6 md:p-7 h-full flex flex-col">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/15"
          style={{ color: GLOW_COLOR }}
        >
          {icon}
        </div>
        <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export const MyServices = () => {
  return (
    <section
      id="services"
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
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};