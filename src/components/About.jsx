/* eslint-disable no-unused-vars */
import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-p border-neutral-900 pb-4 pt-2">
      {" "}
      {/* Reduced top padding */}
      <h1 className="my-6 text-center text-3xl">
        {" "}
        {/* Reduced top margin on the heading */}
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-nowrap items-center lg:items-start">
        <motion.div
          whileInView={{ opacity: 1, x: 100 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-start  w-full">
            <img
              src={aboutImg}
              alt="about"
              className="w-full max-w-xs lg:max-w-md object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 100 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="text-center lg:text-left p-4 lg:p-0">
            {" "}
            {/* Adjusted padding */}
            <p className="my-2 mt-20 mr-48 max-w-xl mx-auto lg:mx-0 py-4 font-extralight">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
