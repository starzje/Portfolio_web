import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right md:bg-center bg-no-repeat sticky top-0 left-0 right-0 z-0"></div>
      <motion.div className="absolute bottom-0 left-0 right-0    z-20">
        <img className="w-full " src="./assets/floor.svg" />
        <div className="bg-[#120C5C] pt-0"></div>
      </motion.div>
    </>
  );
}

export default App;
