import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={32} className="text-amber-400" />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Code size={32} className="text-amber-400" />,
      skills: ["Java", "Spring Boot", "RESTful APIs", "Node.js (basic)"],
    },
    {
      title: "Database Management",
      icon: <Database size={32} className="text-amber-400" />,
      skills: ["MySQL", "MongoDB (basic)"],
    },
    {
      title: "Tools & Other Skills",
      icon: <Wrench size={32} className="text-amber-400" />,
      skills: ["Git & GitHub", "Postman", "VS Code", "Intellij IDEA", "Netlify", "Agile Workflow"],
    },
  ];

  return (
    <div  id="skills" className="container mx-auto my-6">
        <div className="w-[90%] mx-auto">
            <section className="bg-gray-950 text-white py-20 relative rounded-xl">
              <div className="hidden md:block absolute ml-20 ">
                      <Link
                        to='/'
                        className="border flex border-amber-500 px-5 py-2 rounded-lg text-amber-400 font-semibold hover:bg-amber-500 hover:text-white transition items-center gap-2"
                        >
                        <FaArrowLeft />
                        <span>Home</span>
                      </Link>
                    </div>
                <div className="mx-auto w-[90%] text-center">
                    <motion.h2
                    className="text-4xl font-bold mb-12 text-amber-400"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                    Technical Skills
                    </motion.h2>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                        key={index}
                        className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/40 transition"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                        <div className="flex items-center justify-center mb-4">{category.icon}</div>
                        <h3 className="text-xl font-semibold mb-4 text-amber-400">{category.title}</h3>
                        <ul className="space-y-2 text-gray-300">
                            {category.skills.map((skill, idx) => (
                            <li key={idx} className="hover:text-white transition">{skill}</li>
                            ))}
                        </ul>
                        </motion.div>
                    ))}
                    </div>
                    
                </div> 
            </section>
        </div>
    </div>
    
  );
};

export default Skills;
