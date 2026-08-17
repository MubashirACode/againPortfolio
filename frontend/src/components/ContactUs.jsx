import React, { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const GLOW_COLOR = "#22D3EE";

// Replace these with your own EmailJS service, template, and public key
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const STAR_COUNT = 80;

const generateStars = () =>
  Array.from({ length: STAR_COUNT }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "mubashirali200512@gmail.com",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "03444980396",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Karachi, Pakistan",
  },
];

export const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});
  const stars = useMemo(() => generateStars(), []);

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.get("name")?.trim()) newErrors.name = "Enter your name";
    if (!formData.get("email")?.trim()) newErrors.email = "Enter your email";
    if (!formData.get("message")?.trim())
      newErrors.message = "Write a short message";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden px-6 md:px-12 lg:px-20 py-24"
      style={{ backgroundColor: "#05060f" }}
    >
      {/* Star background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: "0 0 4px rgba(255,255,255,0.8)",
              animation: `contact-star-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes contact-star-twinkle {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}</style>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Send a message and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col gap-5"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 border border-white/15 rounded-2xl p-4 bg-black/40 backdrop-blur-sm"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/15 flex-shrink-0"
                  style={{ color: GLOW_COLOR }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3 relative rounded-2xl p-[2px] overflow-hidden"
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
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
              style={{ boxShadow: `0 0 30px ${GLOW_COLOR}66` }}
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-black rounded-2xl p-6 md:p-8 flex flex-col gap-5"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-white/15 focus:border-white/30 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full bg-transparent border border-white/15 focus:border-white/30 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border border-white/15 focus:border-white/30 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-black transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 w-fit"
                style={{ backgroundColor: GLOW_COLOR }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <FiSend size={16} />
              </button>

              {status === "sent" && (
                <p className="text-sm" style={{ color: GLOW_COLOR }}>
                  Message sent. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};