import TechStack from "./TechStack";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import {
  githubCTA,
  projectTitle,
  mockupImage,
  projectDescription,
} from "../helpers/animations";

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

  return <div>projects</div>;
};

export default Projects;
