import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import uuid4 from "uuid4";
// animations
import {
  mainSectionAnimation,
  mobileNavSlider,
  mobileListItem,
  mobileButtonItem,
  githubIconAnimation,
  headerAnimation,
  titleAnimation,
  subTitleAnimation,
  paragraphAnimation,
  buttonAnimation,
} from "../helpers/animations";

const menu = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#work" },
  { name: "Contact", link: "#contact" },
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
    <motion.main
      variants={mainSectionAnimation}
      initial="hidden"
      animate="visible"
      className=" fp-bg m-0  fixed md:relative overflow-y-hidden mobile-fix  section h-[100%] md:h-screen  bg-[#120C5C] bg-hero-pattern2 bg-cover bg-center bg-no-repeat top-[0.5px]">
      <div className="fp-bg bg-hero-pattern2 bg-cover   2xl:bg-contain  bg-center 2xl:bg-center md:bg-right "></div>
      <div className="inline-block md:hidden absolute top-2 right-2 z-50 ">
        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>

      {/* MOBILE */}
      <div className="relative z-10">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={uuid4()}
              variants={mobileNavSlider}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed  -right-0 mobile-fix   w-screen fullheight md:h-screen overflow-hidden bg-slate-900 bg-opacity-100 z-[100]  ">
              <div className=" flex flex-col items-center justify-center h-full">
                {menu.map((item) => (
                  <motion.li
                    variants={mobileListItem}
                    initial="hidden"
                    whileInView="visible"
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
                  variants={mobileButtonItem}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-[#1F1CA1] hover:bg-[#2826b0] inline-block font-semibold text-center text-2xl  py-2 px-5 text-white rounded-2xl tracking-wider"
                  href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer">
                  Download CV
                </motion.a>
                <motion.a
                  layout
                  variants={githubIconAnimation}
                  initial="hidden"
                  whileInView="visible"
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
          variants={headerAnimation}
          initial="hidden"
          animate="visible"
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
            className="bg-black   hidden md:flex font-semibold   py-2 px-5 text-white rounded-xl tracking-wider justify-center items-center gap-2"
            href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            <AiOutlineCloudDownload className="text-lg" />
            Download CV
          </motion.a>
        </motion.header>
        <div className="h-[100%] md:h-[calc(100vh-4em)]  flex justify-start pt-20 md:pt-0 md:justify-center flex-col items-center pb-28 ">
          <div className="text-white text-center  ">
            <motion.h1
              variants={titleAnimation}
              initial="hidden"
              animate="visible"
              className="text-[2rem] md:text-[3rem] uppercase font-extrabold leading-[40px] md:leading-[50px] ">
              Turn your ideas
              <br />{" "}
              <motion.span
                variants={subTitleAnimation}
                initial="hidden"
                animate="visible">
                into reality
              </motion.span>
            </motion.h1>

            <motion.p
              layout
              variants={paragraphAnimation}
              initial="hidden"
              animate="visible"
              className="text-[1.7rem] md:text-[2rem] mt-2 font-light leading-[30px] md:leading-10 tracking-wide  ">
              You just need to take the first step.
            </motion.p>
          </div>
          <motion.div
            variants={buttonAnimation}
            initial="hidden"
            animate="visible"
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
          className="scrollDown  hidden md:inline-block fixed text-[0.7rem] bottom-[130px] md:bottom-[160px] 
        left-[50%] md:left-[100px] 2xl:bottom-[300px] leading-[1px] tracking-[0.3em] text-white  z-0  content-none font-semibold 2xl:font-bold after:w-[2px] after:h-[140px] after:bg-white after:absolute after:left-0 after:right:0 after:m-auto after:bottom-[-160px] cursor-pointer">
          SCROLLDOWN
        </motion.p>
      </div>
    </motion.main>
  );
};

export default Hero;
