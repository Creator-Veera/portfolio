import React from 'react'
import resume from '../assets/Veeramani.G.pdf'
import {motion} from 'framer-motion'
import {FaGithub,FaLinkedin,FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='container mx-auto '>
        <div className='w-[90%] mx-auto'>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white rounded-lg">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I’m <span className="text-amber-400">Veeramani G</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Full Stack Developer
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                    I specialize in building responsive and scalable web applications using{" "}
                    <span className="text-amber-400">React</span>,{" "}
                    <span className="text-amber-400">Java</span>, and{" "}
                    <span className="text-amber-400">Spring Boot</span>. 
                    Passionate about turning innovative ideas into practical solutions.
                    </p>

                    <div className="flex gap-4">
                    <Link
                        to="/projects"
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        View Projects
                    </Link>
                    <a
                        href={resume}
                        download={true}
                        className="border border-amber-500 text-amber-400 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition"
                    >
                        Download Resume
                    </a>
                    </div>

                    <div className="flex gap-6 mt-8 text-2xl">
                    <a href="https://github.com/Creator-Veera/" target="_blank" rel="noreferrer">
                        <FaGithub className="hover:text-amber-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/veeramani0707/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="hover:text-amber-400" />
                    </a>
                    <a href="mailto:veeramaniishere@gmail.com">
                        <FaEnvelope className="hover:text-amber-400" />
                    </a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center mb-10 md:mb-0"
                >
                    <img
                    src="https://ik.imagekit.io/faypstoj9/ImageKIT/profile1.jpg?updatedAt=1761470550724"
                    alt="Profile"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-amber-400"
                    />
                </motion.div>
            </section>
        </div>
    </div>
  )
}

export default Hero