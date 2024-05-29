import React, { PropsWithChildren } from "react";

interface IActionButtonProps {
  disabled?: boolean;
}
const ActionButton: React.FC<PropsWithChildren<IActionButtonProps>> = ({
  children,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className={`flex w-full justify-center cursor-pointer hover:bg-purple-hover  text-white text-bold text-sm px-4 py-2 bg-purple-primary rounded-[20px] ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
    >
      <>{children}</>
    </button>
  );
};

export default ActionButton;
