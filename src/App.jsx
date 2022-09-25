import ReactFullpage from "@fullpage/react-fullpage";
import "./fullpage.parallax.min";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
          <Projects />
          <Contact />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
