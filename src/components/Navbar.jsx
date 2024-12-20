import logo from "../assets/youlogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="px-2" />
      </div>
      <div className="m-8 items-center justify-center flex gap-4 text-xl lg:text-2xl">
        <a href="https://www.linkedin.com/in/yudanmaulana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" className="hover:text-sky-600">
          <FaLinkedin />
        </a>
        <a href="https://github.com/YudanMaulana" target="_blank" className="hover:text-white hover:bg-transparent">
          <FaGithub />
        </a>
        <a href="https://buymeacoffee.com/yudanmaulana" target="_blank" className="hover:text-yellow-400">
          <SiBuymeacoffee />
        </a>
        <a href="https://www.instagram.com/yudan_maulana21?igsh=MTg2NjhwbnZxZnl1Ng==" target="_blank" className="hover:text-pink-800">
          <FaInstagram />
        </a>
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "font-bold underline" : "hover:text-gray-400"
            }`}
          >
            EN
          </button>
          <span>|</span>
          <button
            onClick={() => changeLanguage("id")}
            className={`${
              i18n.language === "id" ? "font-bold underline" : "hover:text-gray-400"
            }`}
          >
            ID
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
