import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="section bg-[url('./assets/stars.svg'),_url('./assets/footer_bg.png')]  bg-cover md:bg-contain bg-no-repeat  bg-center md:bg-right-bottom bg-[#140057] min-h-screen   ">
      <div className="container flex flex-col justify-center items-start h-screen ">
        <h3 className="text-[2rem] md:text-5xl text-white font-bold mb-2">
          Like what you see?
        </h3>

        <Form />
      </div>
    </div>
  );
};

export default Contact;
