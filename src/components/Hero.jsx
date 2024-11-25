/* eslint-disable no-unused-vars */
import React from "react";
import { HERO_CONTENT } from "../constants";
import Profile from "../assets/ProfilePic.jpg";
import { animate, delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex mx-5 flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16  text-6xl font-medium tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sumit Miyan
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-extralight tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ml-20 w-[400px] h-[400px] ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Profile}
              alt="Sumit Miyan"
              className="w-full h-full object-cover 
               rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
