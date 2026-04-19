import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../locales";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });

  return (
    <div id="projects" className="py-12 lg:py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading mb-10 lg:mb-16 text-3xl lg:text-5xl"
      >
        <span className="text-gradient">{t("Projects")}</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass-card rounded-xl lg:rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Project Image — constrained height on mobile */}
              <div className="relative overflow-hidden h-[160px] lg:h-auto lg:aspect-video">
                <img
                  src={PROJECTS[index]?.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6 flex flex-col flex-1">
                <h3 className="text-sm lg:text-lg font-semibold text-neutral-200 mb-1.5 lg:mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs lg:text-sm text-neutral-400 leading-relaxed mb-3 lg:mb-4 flex-1 line-clamp-3 lg:line-clamp-none">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag !text-[10px] lg:!text-xs !px-2 !py-0.5 lg:!px-3 lg:!py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
