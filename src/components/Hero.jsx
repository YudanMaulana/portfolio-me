import profilePic from "../assets/yudanMaulanaProfile.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const container = (delay) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay, ease: "easeOut" },
  },
});

function Hero() {
  const { t } = useTranslation();

  return (
    <div id="hero" className="min-h-[90vh] lg:min-h-screen flex items-center pb-10 lg:pb-16 pt-24 lg:pt-20">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-8 lg:gap-0">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            {/* Greeting badge */}
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-4 lg:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full glass text-xs lg:text-sm text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t("title")}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-2 lg:pb-4 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-white">Yudan</span>{" "}
              <span className="text-gradient">Maulana</span>
            </motion.h1>

            {/* Description — shorter on mobile */}
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="max-w-lg py-3 lg:py-4 text-sm lg:text-base leading-relaxed text-neutral-400 line-clamp-4 lg:line-clamp-none"
            >
              {t("HERO_CONTENT")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mt-3 lg:mt-4"
            >
              <a
                href="/cv-yudan-maulana.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-medium text-xs lg:text-sm text-white overflow-hidden transition-all duration-300 hover:shadow-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-300 group-hover:opacity-90" />
                <span className="relative flex items-center gap-2">
                  <FaDownload className="text-xs" />
                  Download CV
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-medium text-xs lg:text-sm text-neutral-300 glass gradient-border animated-gradient-border hover:text-white transition-all duration-300"
              >
                <FaEnvelope className="text-xs" />
                {t("GetInTouch")}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Profile Image — shows first on mobile (flex-col-reverse) */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 via-cyan-500/20 to-pink-500/20 blur-3xl scale-110 animate-pulse-glow" />

              {/* Image with gradient ring */}
              <div className="relative p-1 rounded-2xl gradient-border animated-gradient-border overflow-hidden">
                <img
                  className="rounded-2xl w-[200px] md:w-[280px] lg:w-[380px] object-cover"
                  src={profilePic}
                  alt="Yudan Maulana"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-14 lg:w-20 h-14 lg:h-20 rounded-full bg-violet-500/10 blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-10 lg:w-16 h-10 lg:h-16 rounded-full bg-cyan-500/10 blur-xl animate-float-slow" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
