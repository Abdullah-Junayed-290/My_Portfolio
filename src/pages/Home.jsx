import { Link } from "react-router-dom";

export default function Home() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Express",
    "Tailwind CSS",
    "MongoDB",
    "Python",
    "Django",
    "Git",
  ];

  const projects = [
  {
    title: "React Full‑Stack App",
    blurb:
      "A learning project combining React for the frontend and Express.js for the backend — great for understanding full‑stack workflows.",
    tags: ["React", "Express", "JavaScript"],
    to: "/projects",
    repo: "https://github.com/Abdullah-Junayed-290/react-full-stack",
  },
  {
    title: "JS Frontend + Backend Basics",
    blurb:
      "An exploration of building both frontend and backend in JavaScript, covering core concepts and integration.",
    tags: ["JavaScript", "Node.js"],
    to: "/projects",
    repo: "https://github.com/Abdullah-Junayed-290/Js_Frontend_Backend",
  },
  {
    title: "Password Generator App",
    blurb:
      "A React‑based password generator with customizable options — simple, fast, and practical.",
    tags: ["React", "JavaScript"],
    to: "/projects",
    repo: "https://github.com/Abdullah-Junayed-290/Password-Generator-App",
  },
  {
    title: "Amazon Clone",
    blurb:
      "A static Amazon website clone built with HTML and CSS — a great exercise in layout and styling.",
    tags: ["HTML", "CSS"],
    to: "/projects",
    repo: "https://github.com/Abdullah-Junayed-290/Amazon-clone",
  },
  {
    title: "Next.js Full Stack Auth",
    blurb:
      "A nextjs fullstack auth menegment project with login, signup, register and verification.",
    tags: ["Node.js", "TypeScript", "React", "Next.js", "MongoDB", "Express"],
    to: "/projects",
    repo: "https://github.com/Abdullah-Junayed-290/Nextjs-fullstack-auth",
  },
];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        {/* Decorative gradient blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl dark:from-indigo-700/20 dark:via-fuchsia-700/10 dark:to-cyan-700/20"
        />

        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
              Open to internships and freelance
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                Hi, I’m Md. Abdullah Junayed
              </span>{" "}
              I build modern web experiences.
            </h1>

            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
              Full‑stack developer in training from Dhaka. I love crafting
              fast, accessible UIs and scalable APIs — with a focus on clean
              code and real‑world results.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2.5 text-sm font-semibold text-slate-700 hover:underline dark:text-slate-200"
              >
                Resume ↗
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Minimal avatar/card */}
            <div className="mx-auto mt-4 w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                  M
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Available for
                  </p>
                  <p className="text-slate-900 dark:text-white">
                    Frontend • Full‑stack • UI Polish
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Currently exploring React, Tailwind, and modern JS — building
                projects that balance aesthetics and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-10">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Tech I work with
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Featured projects
          </h2>
          <Link
            to="/projects"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            See all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Link
              to={p.to}
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Placeholder visual */}
              <div
                className={`h-28 w-full rounded-lg bg-gradient-to-br ${
                  idx === 0
                    ? "from-indigo-500/30 to-fuchsia-500/30"
                    : idx === 1
                    ? "from-emerald-500/30 to-cyan-500/30"
                    : "from-amber-500/30 to-rose-500/30"
                }`}
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-950 dark:text-white dark:group-hover:text-white">
                {p.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                {p.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            About me
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
            I’m focused on full‑stack JavaScript — from polished React
            frontends to reliable Node APIs. I care about accessibility,
            performance, and thoughtful design.
          </p>
          <div className="mt-4">
            <Link
              to="/about"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-6 text-white dark:from-indigo-600 dark:to-cyan-600">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold">Let’s build something</h2>
              <p className="mt-1 text-sm text-indigo-50">
                Have an idea or a role in mind? I’d love to hear about it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
              >
                Contact Me
              </Link>
              <a
                href="mailto:abdullahjunayed771@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/40 hover:bg-white/20"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}