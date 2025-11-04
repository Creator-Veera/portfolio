import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'
//import profile from '../assets/images/profile1.jpg'


const About = () => {
  return (
    <div className="container mx-auto my-10">
        <div className="w-[90%] mx-auto">
            <section id="about" className="bg-gray-900 text-white py-20 rounded-xl">
                <div className="container mx-auto w-[90%] flex flex-col md:flex-row items-center justify-between gap-10">
        
                    <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <img
                        src="https://ik.imagekit.io/faypstoj9/ImageKIT/profile1.jpg?updatedAt=1761470550724" 
                        alt="About me"
                        className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
                    />
                    </motion.div>
                    
                    <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <h2 className="text-4xl font-bold mb-6 text-amber-400">About Me</h2>
                    <p className="text-lg leading-relaxed text-gray-300 mb-4">
                        Hi, I’m <span className="font-semibold text-white">Veeramani G</span>, 
                        a passionate <span className="text-amber-400">Full Stack Developer</span> 
                        skilled in creating responsive, user-friendly, and scalable web applications.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300 mb-4">
                        I specialize in developing clean and maintainable code using 
                        <span className="text-white font-semibold"> React, Java, and Spring Boot</span>. 
                        I’m highly motivated to learn new technologies and love solving real-world problems 
                        through efficient design and development.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                        My goal is to work on projects that challenge me to grow, 
                        while contributing to building products that make a difference.
                    </p>

                    <div className="mt-6 flex space-x-3">
                        <Link
                        to='/'
                        className="border flex border-amber-500 px-5 py-2 rounded-lg text-amber-400 font-semibold hover:bg-amber-500 hover:text-white transition items-center gap-2"
                        >
                            <FaArrowLeft />
                            <span>Back</span>
                        </Link>
                        <Link
                        to='/projects'
                        className="border border-amber-500 px-6 py-2 rounded-lg text-amber-400 font-semibold hover:bg-amber-500 hover:text-white transition"
                        >
                        View My Work
                        </Link>
                    </div>
                    </motion.div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default About;
