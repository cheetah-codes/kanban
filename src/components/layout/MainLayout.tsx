import MainNavBar from "../navbar/MainNavBar";
import React, { PropsWithChildren } from "react";
import SideNav from "../navbar/SideNav";
import { useFullScreenContext } from "../../context";
import { EyeIcon } from "../icons";
import { motion } from "framer-motion";

const MainLayout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const { fullScreenEnabled, setFullScreen } = useFullScreenContext();
  return (
    <React.Fragment>
      <div className="flex w-full">
        <div
          className={`h-screen hidden md:w-[25%] grow-0 shrink-0 overflow-y-auto sticky top-0 side_nav max-w-[300px] ${
            fullScreenEnabled ? "md:hidden" : "md:block"
          }`}
        >
          <SideNav />
        </div>

        <div
          className={`h-full w-full md:w-[75%] md:max-w-[calc(100% - 300px)] grow shrink main_content relative`}
        >
          <MainNavBar />
          <main
            className="bg-gray-light dark:bg-gray-very-dark w-full"
            id="main_layout"
          >
            {children}
          </main>
          {fullScreenEnabled ? (
            <div
              className="h-10 w-12 flex justify-center items-center fixed bg-purple-primary dark:bg-purple-hover top-3/4 left-0 rounded-tr-full rounded-br-full cursor-pointer"
              onClick={() => setFullScreen(false)}
            >
              <EyeIcon />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
