import { motion } from "framer-motion";
import Form from "./Form";
import { contactTitle } from "../helpers/animations";

const Contact = () => {
  return (
    <section className="section bg-[url('./assets/footer_bg.png')]  bg-cover md:bg-contain bg-no-repeat  bg-center md:bg-right-bottom bg-[#140057] min-h-full md:min-h-screen   ">
      <div className="container flex flex-col justify-center items-start h-screen ">
        <motion.h3
          variants={contactTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[2rem] md:text-5xl text-white font-bold mb-2">
          Like what you see?
        </motion.h3>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
