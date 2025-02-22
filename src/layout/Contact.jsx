import React from "react";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import ContactVid from "../components/ContactVid";

const Contact = () => {
  return (
    <div className="min-h-screen md:p-10 lg:p-[70px] text-white flex flex-col items-center p-6">
      <div className="flex items-center gap-1 "> 
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rust-brown">
          Contact Me
        </h1>
        <ContactVid />
      </div>

      <div className="w-full max-w-3xl space-y-8 p-4 sm:p-6">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;

