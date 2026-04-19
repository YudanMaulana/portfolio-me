import { CONTACT } from "../locales";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="py-16 lg:py-24 scroll-mt-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading mb-10 lg:mb-16 text-3xl lg:text-5xl"
      >
        <span className="text-gradient">{t("GetInTouch")}</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-12 gradient-border animated-gradient-border relative overflow-hidden">
          {/* Decorative gradient mesh */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative space-y-5 lg:space-y-6">
            {/* Address */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 lg:gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl glass flex items-center justify-center group-hover:shadow-glow-sm transition-all duration-300">
                <FaMapMarkerAlt className="text-violet-400 text-sm lg:text-lg" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] lg:text-xs text-neutral-500 uppercase tracking-wider mb-0.5 lg:mb-1">
                  Location
                </p>
                <p className="text-sm lg:text-base text-neutral-300 truncate">{t("address")}</p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 lg:gap-4 group cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl glass flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300">
                <FaWhatsapp className="text-green-400 text-sm lg:text-lg group-hover:text-green-300 transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] lg:text-xs text-neutral-500 uppercase tracking-wider mb-0.5 lg:mb-1">
                  WhatsApp
                </p>
                <p className="text-sm lg:text-base text-neutral-300 group-hover:text-green-400 transition-colors duration-300">
                  {CONTACT.phoneNo}
                </p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 lg:gap-4 group cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl glass flex items-center justify-center group-hover:shadow-glow-sm transition-all duration-300">
                <FaEnvelope className="text-violet-400 text-sm lg:text-lg group-hover:text-violet-300 transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] lg:text-xs text-neutral-500 uppercase tracking-wider mb-0.5 lg:mb-1">
                  Email
                </p>
                <p className="text-sm lg:text-base text-neutral-300 group-hover:text-violet-400 transition-colors duration-300 truncate">
                  {CONTACT.email}
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
