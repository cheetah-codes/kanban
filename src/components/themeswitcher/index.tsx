import { DarkThemeIcon, LightThemeIcon } from "../icons";
import { useTheme } from "../../context/ThemeContext";
import "./style.css";

const ThemeSwitcher = () => {
  const { toggle, dark } = useTheme();
  return (
    <div className="py-2 px-8 bg-gray-light dark:bg-gray-very-dark rounded">
      <div className="container flex items-center justify-around space-x-2">
        <LightThemeIcon />
        <label className="switch cursor-pointer" onClick={(e) => toggle(e)}>
          <input type="checkbox" checked={dark} readOnly />
          <span className="slider round"></span>
        </label>
        <DarkThemeIcon />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
