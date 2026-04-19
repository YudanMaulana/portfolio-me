import { EXPERIENCES } from "../locales";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div id="experience" className="py-12 lg:py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading mb-10 lg:mb-16 text-3xl lg:text-5xl"
      >
        <span className="text-gradient">{t("Experience")}</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line — visible on lg only */}
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-transparent" />

        {/* Mobile timeline line */}
        <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/30 via-cyan-500/20 to-transparent" />

        <div className="space-y-6 lg:space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex gap-4 lg:gap-8"
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center pt-5 lg:pt-8 flex-shrink-0">
                <div className="glow-dot !w-2.5 !h-2.5 lg:!w-3 lg:!h-3" />
              </div>

              {/* Content Card */}
              <div className="flex-1 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-8 group min-w-0">
                <div className="flex flex-col gap-1 mb-3 lg:mb-4">
                  <h3 className="text-sm lg:text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {experience.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                    <p className="text-xs lg:text-sm text-violet-400">
                      {experience.company}
                    </p>
                    <span className="text-xs text-neutral-500">
                      {experience.year}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-400 text-xs lg:text-sm leading-relaxed mb-3 lg:mb-4">
                  {t(`experience.${experience.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag !text-[10px] lg:!text-xs !px-2 !py-0.5 lg:!px-3 lg:!py-1">
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
