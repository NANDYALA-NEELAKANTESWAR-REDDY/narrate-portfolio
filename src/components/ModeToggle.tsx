import { useTheme } from "@/context/ModeContext";
import { Moon, Sun } from "lucide-react";

export const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-700" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
};
