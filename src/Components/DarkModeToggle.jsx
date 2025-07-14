import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import ThemeContext from "../ThemeSwitch";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="dark-mode-toggle">
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};

export default DarkModeToggle;
