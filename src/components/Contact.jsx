import { motion } from "framer-motion";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="section bg-[url('./assets/footer_bg.png')]  bg-cover md:bg-contain bg-no-repeat  bg-center md:bg-right-bottom bg-[#140057] min-h-screen   ">
      <div className="container flex flex-col justify-center items-start h-screen ">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 70,
          }}
          className="text-[2rem] md:text-5xl text-white font-bold mb-2">
          Like what you see?
        </motion.h3>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
