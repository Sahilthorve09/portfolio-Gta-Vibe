// components/BackToTopButton.jsx
import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react"; // optional, or use any icon

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg z-50 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle size={28} />
      </button>
    )
  );
}
