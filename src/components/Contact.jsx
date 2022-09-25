import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="section bg-[url('./assets/stars.svg'),_url('./assets/footer_bg.svg')]  bg-contain bg-no-repeat  bg-right-bottom bg-[#140057] min-h-screen   ">
      <div className="container flex flex-col justify-center items-start h-screen ">
        <h3 className="text-5xl text-white font-bold mb-2">
          Like what you see?
        </h3>
        <p className="text-white text-2xl mb-6 text-center font-extralight">
          Send me a message.
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
