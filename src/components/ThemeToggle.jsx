import { useTheme } from "../theme/ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycle = () => {
    setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
  };

  const label =
    theme === "system" ? `System (${resolvedTheme})` : theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Toggle theme: ${label}`}
      title={`Theme: ${label} (click to change)`}
      className={
        "inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm " +
        "text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 " +
        "transition-colors " + className
      }
    >
      {/* Icon changes by resolved theme; text shows current mode */}
      <ThemeIcon mode={resolvedTheme} />
      <span className="font-medium">{label}</span>
    </button>
  );
}

function ThemeIcon({ mode }) {
  // Sun for light, moon for dark
  if (mode === "dark") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.76 4.84l-1.8-1.79L3.17 4.83 4.96 6.62 6.76 4.84zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.22 19.78l1.79-1.8-1.79-1.79-1.79 1.79 1.79 1.8zM13 1h-2v3h2V1zm6.83 3.04l-1.79-1.79-1.8 1.79 1.8 1.79 1.79-1.79zM20 11v2h3v-2h-3zm-2.96 8.83l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79zM12 6a6 6 0 1 0 .001 12.001A6 6 0 0 0 12 6z" />
    </svg>
  );
}