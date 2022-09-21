import React from "react";

const pluginWrapper = () => {
  require("./fullpage.parallax.min");
};

const Fullpage = () => (
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    parallax={true}
    parallaxOptions={{
      type: "cover",
      percentage: 60,
      property: "background",
    }}
    scrollBar={false}
    autoScrolling={true}
    //fullpage options
    licenseKey={"K4C1H-Q7U3H-W65K9-92JFJ-RNBUP"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="fp-bg   section h-screen 2xl:h-screen   bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right 2xl:bg-center md:bg-right bg-no-repeat ">
            {/* <div className="fp-bg"></div> */}
            <button
              className="bg-white p-3 rounded-full text-[#120C5C] absolute top-5 right-5"
              onClick={() => fullpageApi.moveTo(3)}>
              Click me to move down
            </button>
          </div>
          <div className=" section h-[120vh] min-h-screen bg-center mt-[-20vh] fp-auto-height   bg-section-pattern bg-cover   bg-no-repeat ">
            <div className="">
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium perferendis animi optio quaerat ratione consequuntur
                harum illo minima quibusdam doloribus.
              </p>
            </div>
            <div>
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium perferendis animi optio quaerat ratione consequuntur
                harum illo minima quibusdam doloribus.
              </p>
            </div>
            <div>
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium perferendis animi optio quaerat ratione consequuntur
                harum illo minima quibusdam doloribus.
              </p>
            </div>
          </div>
          <div className="section  min-h-screen bg-blue-700">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section bg-blue-400">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
