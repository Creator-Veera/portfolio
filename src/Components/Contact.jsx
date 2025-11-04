import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_swze3av", 
        "template_r1sr13u",
        form.current,
        "tEpaWOD3i17b-LLZB" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSent(true);
          setIsError(false);
          e.target.reset();
        },
        (error) => {
          console.error("Email failed:", error.text);
          setIsError(true);
          setIsSent(false);
        }
      );
  };

  return (
    <div className="container mx-auto my-6">
        <div className="w-[90%] mx-auto">
            <section className="bg-gray-900 text-white py-20 rounded-xl">
                <div className="hidden md:block absolute ml-20 ">
                    <Link
                    to='/'
                    className="border flex border-amber-500 px-5 py-2 rounded-lg text-amber-400 font-semibold hover:bg-amber-500 hover:text-white transition items-center gap-2"
                    >
                    <FaArrowLeft />
                    <span>Home</span>
                    </Link>
                </div>
                <div className="text-center">
                    <motion.h2
                    className="text-4xl font-bold text-amber-400 mb-10"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                    Get in Touch
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row justify-center gap-7 mb-10">
                    <div className="flex items-center gap-3 justify-center">
                        <Mail className="text-amber-400" />
                        <p className="text-gray-300">veeramaniishere@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <Phone className="text-amber-400" />
                        <p className="text-gray-300">+91 9789226472</p>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <MapPin className="text-amber-400" />
                        <p className="text-gray-300">Chennai, India</p>
                    </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-8 mb-16">
                    <a href="https://github.com/Creator-Veera" target="_blank" rel="noreferrer">
                        <Github className="text-amber-400 hover:text-white transition" size={28} />
                    </a>
                    <a href="https://linkedin.com/in/veeramani0707" target="_blank" rel="noreferrer">
                        <Linkedin className="text-amber-400 hover:text-white transition" size={28} />
                    </a>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-amber-500"
                        required
                        />
                        <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-amber-500"
                        required
                        />
                    </div>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-amber-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition w-full md:w-auto mx-auto"
                    >
                        Send Message <Send size={18} />
                    </button>

                    
                    {isSent && (
                        <p className="text-green-400 mt-4">✅ Your message was sent successfully!</p>
                    )}
                    {isError && (
                        <p className="text-red-400 mt-4">❌ Oops! Something went wrong. Try again later.</p>
                    )}
                    </motion.form>
                </div>
            </section>
        </div>
    </div>
    
  );
};

export default Contact;
