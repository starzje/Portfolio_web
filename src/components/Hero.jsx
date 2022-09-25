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
      className=" fp-bg relative overflow-y-visible  section h-[120vh] 2xl:h-screen   bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right 2xl:bg-center md:bg-right  ">
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
        <div className="h-[calc(100vh-4em)]  flex justify-start pt-20 md:pt-0 md:justify-center flex-col items-center pb-20 ">
          <div className="text-white text-center  ">
            <h1 className="text-[2rem] md:text-[3rem] uppercase font-extrabold leading-[40px] md:leading-[50px]">
              Turning your <br /> ideas into reality
            </h1>

            <p className="text-[1.7rem] md:text-[2.2rem] mt-2 font-light leading-[30px] md:leading-10 tracking-wide">
              Be bold. Be different. Be remembered.
            </p>
          </div>
          <div className="flex gap-3 md:gap-5 flex-col md:flex-row md:p-0 px-10 justify-center items-center w-full md:w-[28em] mt-8 font-semibold text-[1.2rem]">
            <button
              onClick={() => fullpageApi.moveTo(3)}
              className="bg-[#1F1CA1] hover:bg-[#2826b0] py-2 px-5 text-white w-full tracking-wider rounded-xl">
              SEE MY WORK
            </button>
            <button
              onClick={() => fullpageApi.moveTo(4)}
              className="bg-[#120C5C] hover:bg-[#261f7c]   py-2 px-5 text-white w-full tracking-wider rounded-xl">
              HIRE ME
            </button>
          </div>
        </div>
        <p
          className="scrollDown hidden md:block fixed text-[0.7rem] bottom-[160px] 
        left-[100px] 2xl:bottom-[300px] leading-[1px] tracking-[0.3em] text-white  z-0  content-none font-semibold 2xl:font-bold after:w-[2px] after:h-[140px] after:bg-white after:absolute after:left-0 after:right:0 after:m-auto after:bottom-[-160px]">
          SCROLLDOWN
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
