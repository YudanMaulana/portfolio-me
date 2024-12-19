 import aboutImg from "../assets/about.jpg"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next";


 const About = () => {
    const { t } = useTranslation();
    
  return <div className="border-b border-neutral-900 pb-24">
    <h2 className="text-center text-3xl my-20">{t("about")}<span className="text-neutral-500">{t("me")}</span></h2>
    <div className="flex flex-wrap">
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity:0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-between">
                <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity:0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{t("ABOUT_TEXT")}</p>
                </div>
            </motion.div>
    </div>
  </div>
}

export default About
