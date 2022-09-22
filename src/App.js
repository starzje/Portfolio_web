import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import "./fullpage.parallax.min";

import Hero from "./components/Hero";

const pluginWrapper = () => {
  require("./fullpage.parallax.min");
};

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
          <Hero fullpageApi={fullpageApi} />
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
