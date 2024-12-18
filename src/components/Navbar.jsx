import logo from "../assets/youlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { LINK } from "../constants";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="px-2"/>
    </div>
    <div className="m-8 items-center justify-center flex gap-4 text-2xl ">
        <a href={LINK.linkedin} className="hover:text-sky-600"><FaLinkedin /></a>
        <a href={LINK.github} className="hover:text-white hover:bg-transparent"><FaGithub /></a>
        <a href={LINK.buymeacoffe} className="hover:text-yellow-400"><SiBuymeacoffee /></a>
        <a href={LINK.instagram} className="hover:text-pink-800"><FaInstagram /></a>
    </div>
  </nav>
}

export default Navbar
