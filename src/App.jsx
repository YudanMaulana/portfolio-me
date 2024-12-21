import { useState, useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import { useTranslation } from "react-i18next";


const App = () => {
  const [showToTop, setShowToTop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const halfHeight = document.body.scrollHeight / 2;
      if (window.scrollY > halfHeight) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
      {showToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 p-3 rounded-full bg-neutral-800 text-neutral-300 shadow-lg hover:bg-neutral-700 transition"
        >
          {t("ToTop")}
        </button>
      )}
    </div>
  );
};

export default App;
