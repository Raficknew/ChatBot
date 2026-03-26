import * as motion from "motion/react-client";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/utils";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed top-2 left-2 flex gap-1 items-center">
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "flex w-13 h-7 rounded-full p-0.75 cursor-pointer border-none justify-start bg-gray-300",
          isDark && "justify-end bg-[#9911ff]",
        )}
      >
        <motion.div
          className="size-5.5 rounded-full bg-white"
          layout
          transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2 }}
        />
      </button>
      <h2 className="text-text-secondary">
        {theme.charAt(0).toUpperCase() + theme.slice(1, theme.length)}
      </h2>
    </div>
  );
}
