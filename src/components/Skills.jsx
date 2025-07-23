import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from 'react-icons/fa';
//import TargetCursor from './TargetCursor';




const hoverSoundUrl = '/sounds/hover1.mp3';
const clickSoundUrl = '/sounds/click1.mp3';

// ✅ Define the sound player function
const playSound = (url) => {
  const audio = new Audio(url);
  audio.play();
};

const skills = [
  { icon: <FaHtml5 /> ,name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'ReactJS' },
  { icon: <FaJava />, name: 'Core Java' },
];

const Skills = () => {
  return (
    
    <section className="min-h-screen bg-[#111] text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center font-[Pricedown] text-green-400 mb-12">Skill Arsenal</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onMouseEnter={() => playSound(hoverSoundUrl)}
            onClick={() => playSound(clickSoundUrl)}
            className="bg-[#222] border border-green-500 rounded-xl p-6 text-center hover:scale-105 hover:border-yellow-400 transition-transform cursor-pointer shadow-lg"
            

          >
            <div className="cursor-target">
            <div className="text-5xl text-green-300 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold font-[Pricedown]">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
 
  );
};

export default Skills;
