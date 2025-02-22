import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_fige5tf", 
        "template_l94v505", 
        data, 
        "NbAa7ck6tcjsr5yj0" 
      )
      .then(() => {
        alert("Message sent successfully!");
        reset();  
      })
      .catch(() => {
        alert("Failed to send the message.");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
        className="w-full p-4 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rust-brown"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="w-full p-4 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rust-brown"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <textarea
        placeholder="Message"
        {...register("message", { required: "Message is required" })}
        className="w-full p-4 bg-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rust-brown h-32 resize-none"
      ></textarea>
      {errors.message && <p className="text-red-500">{errors.message.message}</p>}

      <button
        type="submit"
        className="w-full bg-rust-brown p-4 rounded-lg text-white font-bold hover:bg-sand-tan transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
