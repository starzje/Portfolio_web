import React from "react";

const Form = () => {
  return (
    <>
      <form class="flex w-[28em] bg-gradient-to-r from-[#19126d] to-[#1f186c]  flex-col space-y-5 rounded-2xl  py-7 px-5 shadow-2xl shadow-indigo-800 ">
        <div>
          <div class="relative  w-full">
            <input
              type="text"
              id="email"
              class="border-1 peer block w-full appearance-none rounded-lg border border-indigo-700 bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 border-opacity-50"
              placeholder=" "
            />
            <label
              htmlFor="email"
              class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#19126d]  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 font-light">
              {" "}
              Enter Your Email{" "}
            </label>
          </div>
        </div>
        <div>
          <div class="relative mt-2 w-full">
            <input
              type="text"
              id="name"
              class="border-1 peer block w-full appearance-none rounded-lg border border-indigo-700  bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 border-opacity-50"
              placeholder=" "
            />
            <label
              htmlFor="name"
              class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#19126d]  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 font-light">
              {" "}
              Enter Your Name{" "}
            </label>
          </div>
        </div>
        <div>
          <div class="relative mt-2 w-full">
            <textarea
              type="text"
              id="textarea"
              class="border-1 peer block w-full appearance-none rounded-lg border border-indigo-700  bg-transparent px-2.5 pb-2.5 pt-3 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 border-opacity-50"
              placeholder=" "
            />
            <label
              htmlFor="textarea"
              class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#19126d]  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-[25px] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 font-light">
              {" "}
              Enter Your Message
            </label>
          </div>
        </div>

        <button class="rounded-lg bg-[#1F1CA1] hover:bg-[#2826b0] transition duration-300 py-3 font-bold text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
