import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ dealy: 0.5, duration: 0.75 }}
        className="min-h-screen   bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right 2xl:bg-center md:bg-right bg-no-repeat sticky top-0 left-0 right-0 z-0"></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ dealy: 0.5, duration: 0.75 }}
        style={{}}
        className=" min-h-screen  z-20">
        <div className="h-[120vh] min-h-screen bg-[#120C5C]     2xl:bg-contain  md:bg-center bg-no-repeat sticky top-0 left-0 right-0 z-">
          {" "}
          <img
            className="w-full pt-2 absolute 2xl:-top-96 md:-top-36 left-0 right-0 "
            src="./assets/floor.svg"
            alt="Image1"
          />
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
          <div>
            <p className="text-white text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium perferendis animi optio quaerat ratione consequuntur
              harum illo minima quibusdam doloribus.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ dealy: 1, duration: 1.5 }}
        style={{}}
        className=" min-h-screen  z-30">
        <div className=" min-h-screen bg-[red]     2xl:bg-contain  md:bg-center bg-no-repeat sticky top-0 left-0 right-0 z-">
          {" "}
          <img
            className="w-full pt-2 absolute 2xl:-top-96 md:-top-36 left-0 right-0 "
            src="./assets/floor.svg"
            alt="Image1"
          />
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
          <div>
            <p className="text-white text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium perferendis animi optio quaerat ratione consequuntur
              harum illo minima quibusdam doloribus.
            </p>
          </div>
        </div>
        <div>
          <h1>ses</h1>
        </div>
      </motion.div>
    </>
  );
}

export default App;
