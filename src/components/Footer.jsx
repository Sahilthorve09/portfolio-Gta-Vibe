import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 text-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-4">
        {/* Your Dialogue */}
        <p className="text-lg font-semibold">Made with 🖤 by Sahil Thorve</p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/sahilthorve09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-thorve/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sahilthorve09@gmail.com"
            className="hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright & Credit */}
        <div className="text-sm text-gray-400">
          <p>© 2025-26 | Inspired by GTA V</p>
        </div>
      </div>
    </footer>
  );
}
