// src/pages/About.jsx
export default function About() {
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
		"Git"
	];

	const milestones = [
		{
			title: "Frontend foundations",
			detail:
				"Built layouts with HTML/CSS and styled components with Tailwind. Cloned real UIs (e.g., Amazon)."
		},
		{
			title: "Interactive React apps",
			detail:
				"Stateful components, reusable hooks, clean routing. Projects like a Password Generator."
		},
		{
			title: "Backend basics",
			detail:
				"Node.js and Express fundamentals, REST routes, environment config, and JSON APIs."
		},
		{
			title: "Full‑stack mindset",
			detail:
				"Thinking in features: auth, data flows, and deployment prep. Exploring databases and best practices."
		}
	];

	const values = [
		{ k: "Accessibility", v: "Inclusive, keyboard‑friendly, readable UIs." },
		{ k: "Performance", v: "Fast first load, responsive interactions." },
		{
			k: "SEO Optimize",
			v: "websites efficiently, optimize sites for search engines, best Ranking"
		},
		{ k: "Clean design", v: "Minimal, consistent, culturally aware." }
	];

	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
			{/* Header */}
			<header className="mb-8">
				<h1 className="text-3xl font-bold text-slate-900 dark:text-white">
					About Me
				</h1>
				<p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300 text-lg">
					I’m{" "}
					<span className="font-semibold text-indigo-600 dark:text-indigo-400">
						Md. Abdullah Junayed
					</span>
					, a budding full‑stack web developer from Bangladesh. I’m focused on
					modern JavaScript, React, and backend fundamentals — building real
					projects and leveling up every week.
				</p>
				<p className="mt-2 text-slate-600 dark:text-slate-300">
					আমি আব্দুল্লাহ জুনায়েদ — শিখছি, বানাচ্ছি, আর উন্নত করছি। লক্ষ্য: দক্ষ
					ফুল‑স্ট্যাক ডেভেলপার হওয়া, প্র্যাকটিক্যাল প্রোজেক্ট দিয়ে ক্যারিয়ার
					গড়া।
				</p>
			</header>

			{/* Quick facts */}
			<section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<FactCard
					label="Current focus"
					value="React • Node.js • Tailwind • APIs"
				/>
				<FactCard
					label="Open to"
					value="Internships • Freelance • Collaborations"
				/>
				<FactCard label="Goals" value="Full‑stack mastery • AI & cloud next" />
			</section>

			{/* Skills */}
			<section className="mb-12">
				<h2 className="text-xl font-semibold text-slate-900 dark:text-white">
					Skills & Tools
				</h2>
				<div className="mt-4 flex flex-wrap gap-2">
					{skills.map((s) => (
						<span
							key={s}
							className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
						>
							{s}
						</span>
					))}
				</div>
			</section>

			{/* Milestones */}
			<section className="mb-12">
				<h2 className="text-xl font-semibold text-slate-900 dark:text-white">
					Journey so far
				</h2>
				<ol className="mt-4 space-y-4">
					{milestones.map((m, i) => (
						<li
							key={m.title}
							className="relative rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
						>
							<div className="flex items-start gap-3">
								<span className="mt-1 inline-grid h-6 w-6 place-items-center rounded-full bg-indigo-600 text-white text-xs font-bold">
									{i + 1}
								</span>
								<div>
									<h3 className="font-semibold text-slate-900 dark:text-white">
										{m.title}
									</h3>
									<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
										{m.detail}
									</p>
								</div>
							</div>
						</li>
					))}
				</ol>
			</section>

			{/* Values */}
			<section className="mb-12">
				<h2 className="text-xl font-semibold text-slate-900 dark:text-white">
					What I care about
				</h2>
				<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{values.map(({ k, v }) => (
						<div
							key={k}
							className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
						>
							<h3 className="font-semibold text-slate-900 dark:text-white">
								{k}
							</h3>
							<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
								{v}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="mt-4">
				<div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-6 text-white dark:from-indigo-600 dark:to-cyan-600">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="text-xl font-semibold">Let’s connect</h2>
							<p className="mt-1 text-sm text-indigo-100">
								Have an internship, project, or idea? I’d love to hear about it.
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<a
								href="/contact"
								className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
							>
								Contact Me
							</a>
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/40 hover:bg-white/20"
							>
								Resume ↗
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

/* ——— Small presentational subcomponent ——— */
function FactCard({ label, value }) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
			<p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
				{label}
			</p>
			<p className="mt-1 font-medium text-slate-900 dark:text-white">{value}</p>
		</div>
	);
}
