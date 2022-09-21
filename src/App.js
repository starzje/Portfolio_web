import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import "./fullpage.parallax.min";

const pluginWrapper = () => {
  require("./fullpage.parallax.min");
};

const menu = [
  { name: "About", link: "#About" },
  { name: "Projects", link: "#Work" },
  { name: "Contact", link: "#Contact" },
];

const App = () => (
  <ReactFullpage
    loopBottom={true}
    pluginWrapper={pluginWrapper}
    parallax={true}
    verticalCentered={false}
    parallaxOptions={{
      type: "cover",
      percentage: 30,
      property: "background",
    }}
    bigSectionsDestination={"bottom"}
    autoScrolling={true}
    easingcss3={"cubic-bezier(0.745, 0.045, 0.255, 1)"}
    scrollingSpeed={1500}
    anchors={["Home", "About", "Work", "Contact"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fp-bg   section h-screen 2xl:h-screen   bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right 2xl:bg-center md:bg-right bg-no-repeat ">
            <div className="container">
              <header className="h-[4em] flex  justify-between  items-center gap-10">
                <span className="text-white font-extrabold tracking-wider">
                  Ivan Starčević
                </span>
                <nav className="ml-auto">
                  <ul className="flex space-x-7 text-[1.2rem] font-semibold">
                    {menu.map((item) => (
                      <li
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
                  className="bg-orange-600 hover:bg-[#3f36a1]  font-semibold   py-2 px-5 text-white rounded-2xl tracking-wider"
                  href="https://drive.google.com/file/d/1xVG4SlV-Ud-008cWq5dzTNgmxHylGeQ5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer">
                  Download CV
                </a>
              </header>
              <div className="h-[calc(100vh-4em)]  flex  justify-center flex-col items-center self-center  ">
                <div className="text-white text-center ">
                  <h1 className="text-[3rem] font-extrabold leading-none">
                    IVAN STARČEVIĆ
                  </h1>
                  <p className="text-[2rem] font-semibold leading-20">
                    FRONTEND DEVELOPER
                  </p>
                </div>
                <div className="flex gap-5  justify-center items-center w-[28em] mt-5 font-semibold text-[1.2rem]">
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
          <motion.div
            initial={{
              y: 100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className=" section fp-auto-height  h-[120vh] min-h-screen bg-center mt-[-20vh]  bg-section-pattern bg-cover   bg-no-repeat flex justify-center items-center">
            <div className="flex justify-center items-center h-screen">
              <div>
                <p className="text-white  text-2xl">DORITOS NOOU</p>
                <p className="text-white text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium perferendis animi optio quaerat ratione
                  consequuntur harum illo minima quibusdam doloribus.
                </p>
                <p className="text-white text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium perferendis animi optio quaerat ratione
                  consequuntur harum illo minima quibusdam doloribus.
                </p>
              </div>
              <div>
                <p className="text-white text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium perferendis animi optio quaerat ratione
                  consequuntur harum illo minima quibusdam doloribus. lorem500
                </p>
              </div>
              <div>
                <p className="text-white text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium perferendis animi optio quaerat ratione
                  consequuntur harum illo minima quibusdam doloribus.
                  <br></br>DORITOSS YEAAAA
                </p>
              </div>
            </div>
          </motion.div>
          <div className="section  min-h-screen bg-blue-700">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section bg-blue-400">
            <p>Section 2</p>
          </div>
          <div className="section bg-blue-800">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
