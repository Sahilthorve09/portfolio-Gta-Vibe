import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Money Heist Fan Web Page",
    description: "A tribute fan page for the Money Heist series using HTML and CSS.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/images/money-heist-gta.png",
    alt: "Web developer trio in GTA style",
    previewUrl: "https://sahilthorve09.github.io/Money-Heist-/",
  },
  {
    title: "Student College Portal",
    description: "A simple HTML/CSS/JS layout simulating college portal features.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/images/student-portal-gta.png",
    alt: "Web developer trio in GTA style",
    previewUrl: "https://sahilthorve09.github.io/exam-portal/",
  },
  {
    title: "Peaky Blinders",
    description: "Interactive Tic Tac Toe game using JavaScript DOM manipulation.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/images/peakyblinders-gta.png",
    alt: "Web developer trio in GTA style",
    previewUrl: "https://sahilthorve09.github.io/TIC_TAC_TOE-game/",
  },
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-20"
      style={{
        backgroundImage: "url('/images/los-santos-silhouette-night.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Image on top for mobile, left for desktop */}
      <motion.div
        key={project.image}
        initial={{ opacity: 0, rotate: -10, x: -100 }}
        animate={{ opacity: 1, rotate: -5, x: 0 }}
        exit={{ opacity: 0, rotate: -10, x: -100 }}
        transition={{ duration: 0.8 }}
        className="md:absolute md:left-10 md:top-0 md:h-full md:flex md:items-center w-full md:w-auto mb-8 md:mb-0 px-6"
        style={{ transformOrigin: "bottom left" }}
      >
        <img
          src={project.image}
          alt={project.alt}
          className="w-full md:max-w-[60vw] md:max-h-[90vh] object-contain drop-shadow-lg mx-auto md:mx-0"
        />
      </motion.div>

      {/* Text content below image for mobile, right side for desktop */}
      <div className="relative z-10 max-w-xl w-full md:ml-[25vw] text-center bg-black bg-opacity-60 rounded-xl p-6 md:p-8 backdrop-blur-md shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Anton] tracking-wide">
          {project.title}
        </h2>
        <p className="text-base md:text-lg mb-6 font-[Poppins]">
          {project.description}
        </p>
        <div className="mb-6 flex justify-center gap-4 flex-wrap">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold text-sm tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={project.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 md:px-8 rounded-lg transition-colors shadow-lg font-[Anton]"
        >
          Preview Project
        </a>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-10 text-yellow-400 font-bold text-lg md:text-xl select-none cursor-pointer">
          <button onClick={prevProject} aria-label="Previous Project">
            &#8592; Prev
          </button>
          <button onClick={nextProject} aria-label="Next Project">
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
