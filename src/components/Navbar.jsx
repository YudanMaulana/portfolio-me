import logo from "../assets/youlogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import "../i18n";

const navLinks = [
  { key: "about", label: "About", href: "#about" },
  { key: "technologies", label: "Technologies", href: "#technologies" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "projects", label: "Projects", href: "#projects" },
  { key: "contact", label: "GetInTouch", href: "#contact" },
];

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20 py-2 lg:py-3"
          : "bg-transparent py-3 lg:py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Yudan Maulana logo"
            className="w-7 h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 relative group"
            >
              {t(link.label)}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Social Icons - desktop only */}
          <div className="hidden md:flex items-center gap-3 text-lg">
            <a href="https://www.linkedin.com/in/yudanmaulana" target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#0077b5] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.5)]" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/YudanMaulana" target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://buymeacoffee.com/yudanmaulana" target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#ffdd00] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,221,0,0.5)]" aria-label="Buy Me a Coffee">
              <SiBuymeacoffee />
            </a>
            <a href="https://www.instagram.com/yudan_maulana21" target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#e4405f] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.5)]" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center rounded-full glass p-0.5 gap-0.5">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2.5 py-1 text-[10px] lg:text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                i18n.language === "en"
                  ? "bg-violet-600/80 text-white shadow-glow-sm"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("id")}
              className={`px-2.5 py-1 text-[10px] lg:text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                i18n.language === "id"
                  ? "bg-violet-600/80 text-white shadow-glow-sm"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              ID
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-4 h-0.5 bg-neutral-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-4 h-0.5 bg-neutral-300 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-0.5 bg-neutral-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong mt-2 mx-4 rounded-xl p-5 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-neutral-300 hover:text-white transition-colors py-1.5 border-b border-neutral-800/30 last:border-0"
            >
              {t(link.label)}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-neutral-800/50 text-base">
            <a href="https://www.linkedin.com/in/yudanmaulana" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#0077b5] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/YudanMaulana" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://buymeacoffee.com/yudanmaulana" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#ffdd00] transition-colors">
              <SiBuymeacoffee />
            </a>
            <a href="https://www.instagram.com/yudan_maulana21" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#e4405f] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
