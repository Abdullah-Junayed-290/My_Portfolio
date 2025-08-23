import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand / Name */}
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          © {new Date().getFullYear()} Md. Abdullah Junayed. All rights reserved.
        </p>

        {/* Navigation links */}
        <nav className="flex gap-6 text-sm">
          <Link to="/about" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400">
            About
          </Link>
          <Link to="/projects" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400">
            Projects
          </Link>
          <Link to="/contact" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400">
            Contact
          </Link>
        </nav>

        {/* Social icons */}
        <div className="flex gap-4 text-lg">
          <Link
            to="mailto:abdullahjunayed771@gmail.com"
            className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            <FaEnvelope />
          </Link>
          <Link
            to="https://github.com/Abdullah-Junayed-290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}