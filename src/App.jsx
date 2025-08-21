// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
	return (
		<div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
			<Navbar />
			<main className="pt-4">
				<Suspense
					fallback={<div className="text-center py-10">Loading...</div>}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}
