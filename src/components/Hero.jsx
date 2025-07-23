import React from "react";
import { motion } from "framer-motion";
import RockstarLogo from "../assets/rockstar-logo1.png";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url('/images/los-santos-silhouette-night.png')
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mb-4 relative z-10">
        I am{" "}
        <span className="text-green-500 relative inline-block">
          Sahil Thorv
          <span className="text-yellow-400">e</span>

          {/* Logo floating exactly on the "e" */}
          <span className="absolute -top-8 right-[-1.5rem] sm:right-[-2rem] animate-float">
            <img
              src={RockstarLogo}
              alt="rockstar logo"
              className="w-6 sm:w-10"
            />
          </span>
        </span>
      </h1>

      <motion.p
        className="text-lg sm:text-2xl text-gray-300 mb-2 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        In the world of bugs and builds...
      </motion.p>
      <motion.p
        className="text-lg sm:text-2xl text-gray-300 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I deploy with precision.
      </motion.p>
    </section>
  );
}
