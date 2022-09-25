import ReactFullpage from "@fullpage/react-fullpage";
import "./fullpage.parallax.min";
import Hero from "./components/Hero";
import About from "./components/About";

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
          <About />
          <div className="section  fp-auto-height min-h-screen bg-gradient-to-b from-[#171277] to-blue-800">
            <h2>Featured Projects</h2>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section bg-zinc-900 min-h-screen">
            <p>Section 2 blue</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
