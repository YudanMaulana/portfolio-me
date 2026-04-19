import aboutImg from "../assets/about.jpg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="py-20">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading mb-16"
      >
        {t("about")}
        <span className="text-gradient">{t("me")}</span>
      </motion.h2>

      <div className="flex flex-wrap items-center gap-8 lg:gap-0">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:pr-12"
        >
          <div className="relative group max-w-md mx-auto lg:mx-0">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative overflow-hidden rounded-2xl gradient-border animated-gradient-border">
              <img
                className="rounded-2xl w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={aboutImg}
                alt="Yudan Maulana"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="glass-card rounded-2xl p-8">
            <p className="text-neutral-400 leading-relaxed text-base">
              {t("ABOUT_TEXT")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
