import React, { PropsWithChildren } from "react";

interface ISecondaryButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}
const SecondaryButton: React.FC<PropsWithChildren<ISecondaryButtonProps>> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full justify-center font-bold cursor-pointer bg-opacity-10 dark:bg-white dark:bg-opacity-100 text-purple-primary hover:bg-opacity-25  bg-[#635FC7] text-bold text-sm px-4 py-2 rounded-[20px] ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
    >
      <>{children}</>
    </button>
  );
};

export default SecondaryButton;
