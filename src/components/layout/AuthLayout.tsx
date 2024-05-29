import AuthNavBar from "../navbar/AuthNavBar";
import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="">
      <AuthNavBar />
      <main className="bg-gray-light dark:bg-gray-dark w-full h-screen px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
