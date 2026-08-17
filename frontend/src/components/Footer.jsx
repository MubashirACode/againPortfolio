import React from "react";
import { FiGithub, FiYoutube, FiLinkedin, FiMail } from "react-icons/fi";

const GLOW_COLOR = "#22D3EE";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "My Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FiGithub size={18} />, href: "https://github.com/MubashirACode", label: "GitHub" },
  { icon: <FiYoutube size={18} />, href: "www.youtube.com/@C0deWithMubashir", label: "YouTube" },

  { icon: <FiMail size={18} />, href: "mailto:mubashirali200512@email.com", label: "Email" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-transparent border-t border-white/10 px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left: Logo + tagline + socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white">
              Mubashir<span style={{ color: GLOW_COLOR }}>.</span>
            </a>
            <p className="text-white/50 text-sm mt-3 max-w-xs leading-relaxed">
              MERN Stack Web Developer helping businesses build fast,
              scalable web apps and automate their workflows.
            </p>

            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:text-black"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = GLOW_COLOR;
                    e.currentTarget.style.borderColor = GLOW_COLOR;
                    e.currentTarget.style.boxShadow = `0 0 20px ${GLOW_COLOR}99`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Nav links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
              Quick Links
            </p>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-10" />

        {/* Copyright */}
        <p className="text-white/40 text-xs text-center">
          © {year} Mubashir Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};