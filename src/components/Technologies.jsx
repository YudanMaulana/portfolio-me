import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { FaUbuntu } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    icon: RiReactjsLine,
    name: "React",
    color: "#61dafb",
    shadowColor: "rgba(97, 218, 251, 0.3)",
  },
  {
    icon: TbBrandNextjs,
    name: "Next.js",
    color: "#ffffff",
    shadowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    icon: FaFlutter,
    name: "Flutter",
    color: "#02569B",
    shadowColor: "rgba(2, 86, 155, 0.3)",
  },
  {
    icon: FaUbuntu,
    name: "Ubuntu",
    color: "#E95420",
    shadowColor: "rgba(233, 84, 32, 0.3)",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "#339933",
    shadowColor: "rgba(51, 153, 51, 0.3)",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind",
    color: "#06b6d4",
    shadowColor: "rgba(6, 182, 212, 0.3)",
  },
];

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <div id="technologies" className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading mb-16"
      >
        <span className="text-gradient">{t("Technologies")}</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group"
          >
            <div
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-400"
              style={{
                "--hover-shadow": tech.shadowColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${tech.shadowColor}`;
                e.currentTarget.style.borderColor = `${tech.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = "";
              }}
            >
              <tech.icon
                className="text-5xl lg:text-6xl transition-all duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
