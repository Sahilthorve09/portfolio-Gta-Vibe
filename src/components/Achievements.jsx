import React, { useState } from "react";

const allAchievements = [
  {
    title: "Mobile and Web Development Certification Course",
    institute: "Bajaj Finserv, Skill India",
    duration: "Completed: 30 Apr 2024",
    description: "Learned web design using Figma and Adobe Photoshop...",
    skills: ["Next.JS", "Vite", "MongoDB", "Node.JS"],
    status: "Completed",
    certificate: "available",
  },
  {
    title: "What is Generative AI Certification Course",
    institute: "Microsoft, LinkedIn",
    duration: "Completed: 19 Sep 2024",
    description: "Gained developer-level insights into Generative AI tools...",
    skills: ["Gen AI", "Prompt Engineering", "AI Tools"],
    status: "Completed",
    certificate: "available",
  },
  {
    title: "HTML & CSS Certification",
    institute: "freeCodeCamp",
    duration: "Jan 2023",
    description: "Completed responsive web design certification.",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
    status: "Completed",
    certificate: "available",
  },
  {
    title: "Git & GitHub Essentials",
    institute: "Udemy",
    duration: "June 2022",
    description: "Learned version control, branching, and pull requests.",
    skills: ["Git", "GitHub", "CLI"],
    status: "Completed",
    certificate: "available",
  },
  {
    title: "C Programming Basics",
    institute: "College Coursework",
    duration: "2021",
    description: "Introduced to structured programming using C.",
    skills: ["C", "Loops", "Functions"],
    status: "Completed",
    certificate: "available",
  },
];

const AchievementSection = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const showMore = () => setVisibleCount((prev) => prev + 2);
  const showLess = () => setVisibleCount(2);

  const visibleAchievements = allAchievements.slice(0, visibleCount);
  const hasMore = visibleCount < allAchievements.length;
  const hasLess = visibleCount > 2;

  return (
    <section className="py-16 bg-black text-white px-4 sm:px-10 lg:px-20">
      <h2
        className="text-4xl font-bold text-center mb-10 font-[Anton] text-yellow-400 tracking-widest drop-shadow"
        data-aos="fade-up"
      >
        Achievements
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {visibleAchievements.map((achieve, index) => (
          <div
            key={index}
            className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white transform skew-x-[-10deg] border border-yellow-400 hover:border-yellow-500 transition-all duration-300 rounded-xl shadow-lg"
            data-aos="flip-left"
            data-aos-delay={index * 150}
            data-aos-once="false"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 transform skew-x-[-10deg] p-6">
              <div className="transform skew-x-[10deg]">
                <h3 className="text-2xl font-bold font-[Anton] mb-2">{achieve.title}</h3>
                <p className="text-yellow-300 font-semibold">{achieve.institute}</p>
                <p className="text-sm text-gray-400 mb-3">{achieve.duration}</p>
                <p className="mb-3 text-gray-300">{achieve.description}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {achieve.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm font-bold px-3 py-1 rounded-full ${achieve.status === "Completed"
                      ? "bg-green-500"
                      : achieve.status === "On Going"
                        ? "bg-yellow-500 text-black"
                        : "bg-red-500"
                    }`}
                >
                  {achieve.status === "Completed"
                    ? "Mission Passed"
                    : achieve.status === "On Going"
                      ? "Mission On Going"
                      : "Pending"}
                </span>
                {achieve.certificate === "available" ? (
                  <a
                    href="#"
                    className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg transition-all"
                  >
                    Show Certificate
                  </a>
                ) : (
                  <span className="text-gray-400 text-xs italic">Certificate Pending</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {(hasMore || hasLess) && (
        <div className="mt-10 text-center space-x-4">
          {hasMore && (
            <button
              onClick={showMore}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg transition-all"
            >
              Show More
            </button>
          )}
          {hasLess && (
            <button
              onClick={showLess}
              className="bg-gray-800 hover:bg-gray-700 border border-yellow-400 text-yellow-300 font-bold px-6 py-3 rounded-lg transition-all"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default AchievementSection;
