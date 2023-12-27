"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
// import web1 from "../../public/web1.png";
// import web2 from "../../public/web2.png";
// import web3 from "../../public/web3.png";
// import web4 from "../../public/web4.png";

const projectsData = [
  {
    id: 1,
    title: "Sumz",
    description: "Save Time, Read Smart: AI Article Summarizer Unleashes Effortless Insights",
    image:"https://github.com/Mrityunjaydeepak/nextjs-portfolio/blob/main/public/web2.png?raw=true",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrityunjaydeepak/summarize",
    previewUrl: "https://article-ai.netlify.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Master Your Finances: Unleashing the Power of a Full-stack Expense Tracker",
    image: "https://github.com/Mrityunjaydeepak/nextjs-portfolio/blob/main/public/web1.jpg?raw=true",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrityunjaydeepak/FullStack_expense_tracker",
    previewUrl: "https://full-stack-expense-tracker-kappa.vercel.app//",
  },
  {
    id: 3,
    title: "Dukaan",
    description: "Seamless Shopping: Elevate Your Experience with a Full-stack Ecommerce Store",
    image: "https://github.com/Mrityunjaydeepak/nextjs-portfolio/blob/main/public/web3.png?raw=true",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrityunjaydeepak/Dukaan-The-Store",
    previewUrl: "https://dukaan-the-store.vercel.app/home",
  },
  {
    id: 4,
    title: "GPT landing page",
    description: "Reacting to Brilliance: Unveiling the Power of GPT in Our Intuitive Landing Page",
    image: "https://github.com/Mrityunjaydeepak/nextjs-portfolio/blob/main/public/web4.png?raw=true",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mrityunjaydeepak/React-AI-APP",
    previewUrl: "https://classy-haupia-805276.netlify.app/",
  },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-5xl p-6 text-center dark:text-white">
        Each Project is a unique piece of development!
      </h2>
      <div className="text-black dark:text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-2s md:gap-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;