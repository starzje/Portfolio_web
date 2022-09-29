import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import { formAnimation } from "../helpers/animations";

const Form = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const idToast = toast.loading("Sending email...");
    emailjs
      .sendForm(
        "service_bgksymg",
        "template_ngfqrlm",
        form.current,
        "GiCXUjozzVj_odgQA"
      )
      .then(
        (result) => {
          toast.update(idToast, {
            render: "Email sent successfully. I will contact you soon.",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          toast.update(idToast, {
            render: "Something went wrong",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <>
      <motion.form
        variants={formAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full md:w-[25em] bg-gradient-to-r from-[#19126d] to-[#1a145c]  flex-col space-y-5 rounded-2xl mt-5  py-7 px-5 shadow-xl opacity-100 md:opacity-90">
        <p className="text-white text-2xl  font-extralight">
          Send me a message.
        </p>
        <div>
          <div className="relative mt-2 w-full">
            <input
              name="user_name"
              type="text"
              id="name"
              className="border-1 peer block w-full appearance-none rounded-lg border border-indigo-700  bg-transparent px-2.5 pb-2.5 pt-3  text-white focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label
              htmlFor="name"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#19126d]  px-2  text-[#ffffff5a] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 font-light">
              {" "}
              Enter Your Name{" "}
            </label>
          </div>
        </div>
        <div>
          <div className="relative  w-full">
            <input
              name="user_email"
              type="email"
              id="email"
              className="border-1 peer block w-full appearance-none rounded-lg border border-indigo-700 bg-transparent px-2.5 pb-2.5 pt-3  text-white focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              title="Please enter a valid email address"
              required
            />
            <label
              htmlFor="email"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#19126d]  px-2  text-[#ffffff5a] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 font-light">
              {" "}
              Enter Your Email{" "}
            </label>
          </div>
        </div>

        <div>
          <div className="relative mt-2 w-full">
            <textarea
              name="message"
              type="text"
              id="textarea"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="border-1 peer block w-full appearance-none rounded-lg border border-indigo-700  bg-transparent px-2.5 pb-2.5 pt-3  text-white focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
              required
            />
            <label
              htmlFor="textarea"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#19126d]  px-2  text-[#ffffff5a] duration-300 peer-placeholder-shown:top-[25px] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 font-light">
              {" "}
              Enter Your Message
            </label>
          </div>
        </div>

        <button className="rounded-lg bg-[#1F1CA1] hover:bg-[#2826b0] transition duration-300 py-3 font-bold text-white flex justify-center items-center gap-2">
          Send <RiMailSendLine />
        </button>
      </motion.form>
    </>
  );
};

export default Form;
