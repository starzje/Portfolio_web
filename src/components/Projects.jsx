import TechStack from "./TechStack";
import { motion } from "framer-motion";

const Projects = () => {
  const techStack = [
    {
      icon: "devicon-react-original",
      iconName: "React",
    },
    {
      icon: "devicon-redux-original",
      iconName: "Redux",
    },
    {
      icon: "devicon-firebase-plain",
      iconName: "Firebase",
    },
    {
      icon: "devicon-tailwindcss-plain",
      iconName: "Tailwind",
    },
  ];

  return (
    <div
      className="section relative fp-auto-height 
    bg-bg-pattern   min-h-screen  bg-contain bg-left-top bg-no-repeat ">
      <motion.a
        initial={{
          x: 500,
        }}
        whileHover={{
          x: 140,
          backgroundColor: "rgba(1,87,218,0.35)",
        }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 70,
        }}
        href="https://github.com/starzje"
        target="_blank"
        className="text-white cursor-pointer text-[1.1rem] flex justify-center items-center bg-gradient-to-t from-[rgba(1,87,218,0.15)] to-[rgba(0,0,0,0.01)] absolute py-2 px-5 rounded-l-full top-[60px] shadow-2xl  right-0 pr-48">
        <motion.i
          layout
          className="devicon-github-original relative text-3xl"></motion.i>
        <motion.span layout className="relative pl-10 select-none">
          {" "}
          See more work like this on Github
        </motion.span>
      </motion.a>

      <div className="flex h-screen justify-center items-center">
        <div className="container mt-10  ">
          <h3 className="text-[2rem] md:text-5xl  text-white font-bold pb-7">
            Featured Projects
          </h3>
          <div className="bg-gradient-to-bl from-[rgba(1,87,218,0.15)] to-[rgba(0,0,0,0.01)]  flex justify-around drop-shadow-2xl items-center">
            <div className="w-[20em] ">
              {" "}
              <img src="./assets/mockup.png" alt="" className="w-full" />
            </div>
            <div className="w-1/2 border-l-4 pl-6 border-opacity-20 border-blue-600">
              <h3 className="text-white text-[1.5rem] md:text-3xl mb-6 font-bold">
                Chattam - Chat App
              </h3>
              <p className="text-white text-[1rem] md:text-1.2xl mb-6">
                Live chat application created with react and firebase. Users can
                create an account, upload profile picture, login, and chat with
                other users in real time. Users can also create and join rooms
                to chat with other users in a specific room.
              </p>
              <ul className="flex flex-wrap gap-5  ">
                {techStack.map((tech) => (
                  <TechStack
                    icon={tech.icon}
                    iconName={tech.iconName}
                    key={tech.icon}
                  />
                ))}
                <li className="flex items-center  gap-2 py-1 px-3 rounded-xl text-white bg-[rgba(107,77,255,0.17)] text-[0.9rem] ">
                  <img src="./assets/fmotion.svg" className="w-[12px]" />
                  <span>FramerMotion</span>
                </li>
              </ul>
              <div className="flex gap-10 items-center mt-8">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1F1CA1] w-full text-white rounded-xl py-1.5 px-5  font-bold text-[1rem] text-center md:text-1.2xl">
                  View Project
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1F1CA1] w-full text-white text-center rounded-xl py-1.5 px-5  font-bold text-[1rem] md:text-1.2xl">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
