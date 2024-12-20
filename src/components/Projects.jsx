import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../constants";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-3xl md:text-4xl text-center"
      >
        {t("Projects")}
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex w-full lg:w-3/4 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center mb-8`}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center p-5"
            >
              <img
                src={PROJECTS[index].image}
                alt={PROJECTS[index].title}
                width={150}
                height={150}
                className="rounded mb-6"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="font-semibold mb-2 text-md md:text-xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-2 py-1 text-xs md:text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
