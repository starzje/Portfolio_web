import { motion } from "framer-motion";

const About = () => {
  return (
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
      className=" section fp-auto-height  h-[120vh] min-h-screen bg-top mt-[-20vh] z-100 bg-cover  bg-[url('../src/assets/bottom_2.svg')]  bg-no-repeat flex justify-center items-center relative">
      <div className="container">
        <div className="flex justify-end items-center h-screen  ">
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}>
            <h2 className="text-5xl font-bold  text-white mt-4 mb-4">
              Why me?
            </h2>
            <p className="text-white max-w-xl text-[1.1rem] ">
              I'm a front-end developer with a strong background in design. I
              have a passion for creating beautiful and functional websites. I'm
              always looking for new challenges and opportunities to learn and
              grow.
              <br />
              <br />
              <span className="text-[#F9A826] font-bold tracking-wider">
                Development:
              </span>{" "}
              JavaScript, React, Redux, TailwindCSS, Firebase, Framer Motion,
              Git.
              <br />
              <br />
              <span className="text-[#F9A826] font-bold tracking-wider">
                Design:
              </span>{" "}
              Figma, Adobe suite, Affinity suite.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0  ">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="w-full"
          src="./assets/bottom_1_1.svg"></motion.img>
      </div>
    </motion.div>
  );
};

export default About;
