import { LogoIcon } from "./icons";
import BoardDropDown from "./dropdowns/BoardDropDown";
const LogoComponent = () => {
  return (
    <div className="flex space-x-2 items-center">
      <LogoIcon />
      <h1 className="font-bold text-lg text-black dark:text-white">Kanban</h1>
    </div>
  );
};

export default LogoComponent;
