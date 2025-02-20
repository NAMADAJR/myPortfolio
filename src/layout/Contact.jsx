// Contact.js
import React from "react";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div className="min-h-screen md:p-10 lg:p-[90px] text-white flex flex-col items-center p-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-rust-brown mb-8">
        Contact Me
      </h1>

      {/* Content */}
      <div className="w-full max-w-3xl space-y-8 p-4 sm:p-6">
        {/* Add your components */}
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
