import { EXPERIENCES } from "../locales";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div id="experience" className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading mb-16"
      >
        <span className="text-gradient">{t("Experience")}</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line — visible on lg only */}
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-transparent" />

        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex gap-8"
            >
              {/* Timeline dot — visible on lg only */}
              <div className="hidden lg:flex flex-col items-center pt-8">
                <div className="glow-dot flex-shrink-0" />
              </div>

              {/* Content Card */}
              <div className="flex-1 glass-card rounded-2xl p-6 lg:p-8 group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-violet-400">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 lg:text-right whitespace-nowrap">
                    {experience.year}
                  </span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {t(`experience.${experience.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
