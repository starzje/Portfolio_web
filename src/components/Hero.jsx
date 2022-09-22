import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";

const menu = [
  { name: "About", link: "#About" },
  { name: "Projects", link: "#Work" },
  { name: "Contact", link: "#Contact" },
];

const Hero = ({ fullpageApi }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    fullpageApi?.setAllowScrolling(!isOpen);
    return () => {
      fullpageApi?.setAllowScrolling(true);
    };
  }, [fullpageApi, isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fp-bg relative overflow-y-visible  section h-screen 2xl:h-screen   bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right 2xl:bg-center md:bg-right bg-no-repeat ">
      <div className="inline-block md:hidden absolute top-2 right-2 z-50">
        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
      {/* MOBILE */}
      <div className="relative z-10">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{
                opacity: 0,
                x: "100vw",
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: "100vw" }}
              className="absolute -right-0  overflow-hidden w-screen h-screen bg-slate-900 bg-opacity-100 z-10">
              <div className=" flex flex-col items-center justify-center h-full">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className="
                  mb-10
                inline-block
                text-white
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-orange-600
                before:via-orange-600
                before:to-orange-600
                hover:before:w-full
                hover:before:opacity-100">
                    <a
                      key={index}
                      href={item.link}
                      className="text-white text-2xl font-bold uppercase tracking-widest "
                      onClick={() => setOpen(false)}>
                      {item.name}
                    </a>
                  </li>
                ))}
                <a
                  className="bg-orange-600 hover:bg-[#3f36a1] inline-block font-semibold text-center text-2xl  py-2 px-5 text-white rounded-2xl tracking-wider"
                  href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer">
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DESKTOP */}
      <div className="container">
        <header className="h-[4em] flex  justify-between  items-center gap-10">
          <span className="text-white font-extrabold tracking-wider">
            Ivan Starčević
          </span>
          <nav className="hidden md:inline-block ml-auto">
            <ul className="flex space-x-7 text-[1.2rem] font-semibold">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="
                inline-block
                text-white
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-orange-600
                before:via-orange-600
                before:to-orange-600
                hover:before:w-full
                hover:before:opacity-100">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="bg-orange-600 hover:bg-[#3f36a1] hidden md:inline-block font-semibold   py-2 px-5 text-white rounded-2xl tracking-wider"
            href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            Download CV
          </a>
        </header>
        <div className="h-[calc(100vh-4em)]  flex justify-start pt-40 md:pt-0 md:justify-center flex-col items-center  ">
          <div className="text-white text-center ">
            <h1 className="text-2xl md:text-[3rem] font-extrabold leading-none">
              IVAN STARČEVIĆ
            </h1>
            <p className=" text-2xl md:text-[2rem] font-semibold leading-20">
              FRONTEND DEVELOPER
            </p>
          </div>
          <div className="flex gap-3 md:gap-5 flex-col md:flex-row md:p-0 px-10 justify-center items-center w-full md:w-[28em] mt-5 font-semibold text-[1.2rem]">
            <button
              onClick={() => fullpageApi.moveSectionDown()}
              className="bg-[#1F1CA1] hover:bg-[#2826b0] py-2 px-5 text-white w-full tracking-wider rounded-xl">
              HIRE ME
            </button>
            <button
              onClick={() => fullpageApi.moveTo(3)}
              className="bg-[#120C5C] hover:bg-[#261f7c]   py-2 px-5 text-white w-full tracking-wider rounded-xl">
              SEE MY WORK
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
