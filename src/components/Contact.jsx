/* eslint-disable no-unused-vars */
import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter text-2xl">
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
