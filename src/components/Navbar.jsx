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
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="px-2" />
      </div>
      <div className="m-8 items-center justify-center flex gap-4 text-2xl">
        <a href="#" className="hover:text-sky-600">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-white hover:bg-transparent">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-yellow-400">
          <SiBuymeacoffee />
        </a>
        <a href="#" className="hover:text-pink-800">
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
