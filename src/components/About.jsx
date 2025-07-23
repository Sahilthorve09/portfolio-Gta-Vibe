import React from "react";
import aboutImg from "../assets/sahil-about.png"; // Ensure this path is correct
const clickSoundUrl = "/sounds/click.mp3";

const playClickSound = () => {
  const audio = new Audio(clickSoundUrl);
  audio.play();
};

const About = () => {
  return (
    <section
      className="bg-black text-white py-16 px-6 md:px-20"
      data-aos="fade-up"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-10 border-b-4 border-yellow-600 inline-block">
        Who I Am 🕶️
      </h2>

      <div
        className="flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-right"
      >
        {/* Image with modern fade effect */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
          <img
            src={aboutImg}
            alt="Sahil Thorve"
            className="rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-60 pointer-events-none" />
        </div>

        {/* Text */}
        <div
          className="w-full md:w-1/2 space-y-5 text-gray-300 text-lg leading-relaxed"
          data-aos="fade-left"
        >
          <p>
            I'm <strong className="text-yellow-300">Sahil Thorve</strong> – a Computer Engineer with
            a flair for front-end finesse and a hunger for clean, high-performance UI.
          </p>
          <p>
            My toolkit includes <span className="text-yellow-300">HTML</span>,{" "}
            <span className="text-yellow-300">CSS</span>,{" "}
            <span className="text-yellow-300">JavaScript</span> and a growing mastery of{" "}
            <span className="text-yellow-300">React</span>. I blend aesthetics and logic to build
            web apps that *look* and *feel* gangster.
          </p>
          <p>
            Design? <strong className="text-yellow-300">Figma</strong> is my sketchpad.
            Code? That’s where the magic drops. Let’s build interfaces that don’t just work—they
            make noise. 🔥
          </p>

          {/* Resume Button with click sound */}
          <a
            href="/resume.pdf"
            className="inline-block bg-green-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
            onClick={playClickSound}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
