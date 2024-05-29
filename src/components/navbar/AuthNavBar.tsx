import LogoComponent from "../LogoComponent";
import ThemeSwitcher from "../themeswitcher";

const AuthNavBar = () => {
  return (
    <nav className="w-full bg-white px-4 py-2 drop-shadow-md dark:bg-gray-dark">
      <div className="logo_container flex justify-between">
        <LogoComponent />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default AuthNavBar;
