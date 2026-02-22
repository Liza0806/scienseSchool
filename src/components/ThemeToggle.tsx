import { useTheme } from "../context/ThemeContext"; 

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn-primary" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
    </button>
  );
}

export default ThemeToggle;
