import { useEffect, useState } from "react";

const projects = [
  {
    title: "React Full‑Stack App",
    description:
      "A full-stack learning project combining React and Express.js. Shows how frontend and backend communicate.",
    tags: ["React", "Express", "JavaScript"],
    github: "https://github.com/Abdullah-Junayed-290/react-full-stack",
  },
  {
    title: "E‑commerce App (Django)",
    description:
      "A Django-based store app with product listings and backend logic. Great intro to Python web development.",
    tags: ["Django", "Python"],
    github: "https://github.com/Abdullah-Junayed-290/Ecommerce-App",
  },
  {
    title: "Password Generator App",
    description:
      "A customizable password generator built with React. Clean UI and useful functionality.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/Abdullah-Junayed-290/Password-Generator-App",
  },
  {
    title: "Amazon Clone",
    description:
      "A static clone of Amazon’s homepage using HTML and CSS. Shows layout and styling precision.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Abdullah-Junayed-290/Amazon-clone",
  },
  {
    title: "JS Frontend + Backend Basics",
    description:
      "Explores frontend and backend integration using pure JavaScript and Node.js.",
    tags: ["JavaScript", "Node.js"],
    github: "https://github.com/Abdullah-Junayed-290/Js_Frontend_Backend",
  },
  {
    title: "Next.js Full Stack Auth",
    description:
      "This is a nextjs fullstack auth menegment project.",
    tags: ["Node.js", "TypeScript", "React", "Next.js", "MongoDB", "Express"],
    github: "https://github.com/Abdullah-Junayed-290/Nextjs-fullstack-auth",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
        My Projects
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
        These are some of the projects I’ve built while learning full-stack
        development. Each one helped me grow my skills in frontend, backend, or
        both.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View on GitHub ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}