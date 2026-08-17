import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import background from "../assets/hero-galaxy-bg.png";
import aboutImage from "../assets/images.jpg";

const FULL_NAME = "Mubashir Ali";
const GLOW_COLOR = "#22D3EE";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < FULL_NAME.length) {
      timeout = setTimeout(() => {
        setDisplayText(FULL_NAME.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText.length === FULL_NAME.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(FULL_NAME.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full min-h-screen flex items-center bg-[#05060f] overflow-hidden px-6 md:px-12 lg:px-20 py-0"
    >
      {/* Bottom fade — blends the galaxy image smoothly into the site's dark navy tone */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #05060f)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">
          {/* Left: Text content — slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-xl"
          >
            <span className="mb-4 px-4 py-1.5 rounded-full text-xs font-medium border border-white/15 text-white/80">
              Available for freelance work
            </span>

            <motion.h1
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl md:text-6xl font-bold min-h-[1.2em]"
              style={{
                color: GLOW_COLOR,
                textShadow: `0 0 10px ${GLOW_COLOR}, 0 0 20px ${GLOW_COLOR}, 0 0 40px ${GLOW_COLOR}99`,
              }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.h1>

            <p className="mt-4 text-xl md:text-2xl text-white font-medium">
              MERN Stack Web Developer
            </p>
            <p className="mt-2 text-sm md:text-base text-white/60 leading-relaxed">
              1.5+ years of hands-on experience building full-stack web
              applications with the MERN stack, automating workflows with
              n8n, and shipping AI-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-sm font-medium text-black transition-transform hover:scale-105"
                style={{ backgroundColor: GLOW_COLOR }}
              >
                Contact Me
              </a>
              <a
                href="#work"
                className="px-6 py-3 rounded-full text-sm font-medium border border-white/15 hover:border-white/30 text-white transition-colors"
              >
                View My Work
              </a>
            </div>
          </motion.div>

          {/* Right: Image — slides in from the right, then floats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl p-[2px] overflow-hidden"
            >
              {/* Traveling light — rotates behind, only the thin edge (p-[2px]) is visible */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1/2 w-[200%] h-[200%]"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0%, transparent 82%, ${GLOW_COLOR} 92%, #ffffff 96%, ${GLOW_COLOR} 100%)`,
                }}
              />

              {/* Soft outer glow that follows the whole ring */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `0 0 30px ${GLOW_COLOR}66`,
                }}
              />

              {/* Image sits on top, masking everything except the thin border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                <img
                  src={aboutImage}
                  alt="Mubashir Ali"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};