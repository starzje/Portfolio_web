import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import uuid4 from "uuid4";

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
      className=" fp-bg relative overflow-y-visible  section h-[120vh] 2xl:h-screen   bg-[#120C5C]  ">
      <div className="fp-bg bg-hero-pattern2 bg-cover  2xl:bg-contain bg-center 2xl:bg-center md:bg-right "></div>
      <div className="inline-block md:hidden absolute top-2 right-2 z-50">
        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>

      {/* MOBILE */}
      <div className="relative z-10">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={uuid4()}
              initial={{
                opacity: 0,
                x: "100vw",
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, x: "100vw" }}
              className="absolute -right-0  overflow-hidden w-screen h-screen bg-slate-900 bg-opacity-100 z-10">
              <div className=" flex flex-col items-center justify-center h-full">
                {menu.map((item) => (
                  <motion.li
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,

                      type: "spring",
                    }}
                    key={uuid4()}
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
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100">
                    <motion.a
                      layout
                      key={uuid4()}
                      href={item.link}
                      className="text-white text-2xl font-bold uppercase tracking-widest "
                      onClick={() => setOpen(false)}>
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
                <motion.a
                  layout
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    type: "spring",
                  }}
                  className="bg-[#1F1CA1] hover:bg-[#3f36a1] inline-block font-semibold text-center text-2xl  py-2 px-5 text-white rounded-2xl tracking-wider"
                  href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer">
                  Download CV
                </motion.a>
                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                  className=" top-3 left-4 absolute z-100 "
                  href="https://github.com/starzje"
                  target="_blank">
                  <motion.i
                    layout
                    className="devicon-github-original text-4xl text-white hover:text-blue-600 transition duration-300"></motion.i>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* DESKTOP */}
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="h-[4em] flex  justify-between  items-center gap-10">
          <span className="text-white font-extrabold tracking-wider cursor-default select-none">
            Ivan Starčević
          </span>
          <nav className="hidden md:inline-block ml-auto">
            <motion.ul
              layout
              className="flex space-x-7 text-[1.2rem] font-semibold">
              {menu.map((item) => (
                <li
                  key={uuid4()}
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
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100">
                  <a key={uuid4()} href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </nav>
          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "#15104c",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-black   hidden md:inline-block font-semibold   py-2 px-5 text-white rounded-2xl tracking-wider"
            href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            Download CV
          </motion.a>
        </motion.header>
        <div className="h-[calc(100vh-4em)]  flex justify-start pt-20 md:pt-0 md:justify-center flex-col items-center pb-28 ">
          <div className="text-white text-center  ">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="text-[2rem] md:text-[3rem] uppercase font-extrabold leading-[40px] md:leading-[50px] ">
              Turn your ideas
              <br />{" "}
              <motion.span
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                }}>
                into reality
              </motion.span>
            </motion.h1>

            <motion.p
              layout
              initial={{ y: -20, opacity: 0, scale: 1 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="text-[1.7rem] md:text-[2rem] mt-2 font-light leading-[30px] md:leading-10 tracking-wide  ">
              Be bold. Be different. Be remembered.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              delay: 1,
              type: "spring",
              stiffness: 30,
            }}
            className="flex gap-3 md:gap-5 flex-col md:flex-row md:p-0 px-10 justify-center items-center w-full md:w-[28em] mt-8 font-semibold text-[1.2rem]">
            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "#2826b0",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => fullpageApi.moveTo(3)}
              className="bg-[#1F1CA1]  py-2 px-5 text-white w-full tracking-wider rounded-xl">
              SEE MY WORK
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "#1c1470",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => fullpageApi.moveTo(4)}
              className="bg-[#120C5C] py-2 px-5 text-white w-full tracking-wider rounded-xl">
              HIRE ME
            </motion.button>
          </motion.div>
        </div>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeatType: "reverse",

            repeat: Infinity,
          }}
          onClick={() => fullpageApi.moveSectionDown()}
          className="scrollDown  fixed text-[0.7rem] bottom-[130px] md:bottom-[160px] 
        left-[50%] md:left-[100px] 2xl:bottom-[300px] leading-[1px] tracking-[0.3em] text-white  z-0  content-none font-semibold 2xl:font-bold after:w-[2px] after:h-[140px] after:bg-white after:absolute after:left-0 after:right:0 after:m-auto after:bottom-[-160px] cursor-pointer">
          SCROLLDOWN
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
