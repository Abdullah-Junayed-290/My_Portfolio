export default function Contact() {
	return (
		<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
				Contact Me
			</h1>
			<p className="text-slate-600 dark:text-slate-300 mb-8">
				Whether you have a project idea, internship opportunity, or just want to
				say hi — I’d love to hear from you. Fill out the form below or reach out
				directly.
			</p>

			{/* Contact form */}
			<form
				action="https://formspree.io/f/myForm" // Replace with your Formspree ID
				method="POST"
				className="space-y-6"
			>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-slate-700 dark:text-slate-200"
					>
						Name
					</label>
					<input
						type="text"
						name="name"
						required="true"
						className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-slate-700 dark:text-slate-200"
					>
						Email
					</label>
					<input
						type="email"
						name="email"
						required="true"
						className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-slate-700 dark:text-slate-200"
					>
						Message
					</label>
					<textarea
						name="message"
						rows="5"
						required
						className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>

				<button
					type="submit"
					className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
				>
					Send Message
				</button>
			</form>

			{/* Direct contact */}
			<div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
				<p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
					Or reach out directly:
				</p>
				<ul className="space-y-2">
					<li>
						<a
							href="mailto:abdullahjunayed771@gmail.com"
							className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
						>
							abdullahjunayed771@gmail.com
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Abdullah-Junayed-290"
							target="_blank"
							rel="noopener noreferrer"
							className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
						>
							GitHub ↗
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/share/1C9vqiYcHV/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
						>
							Facebook ↗
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
