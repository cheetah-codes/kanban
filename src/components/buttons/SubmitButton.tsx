import React, { PropsWithChildren } from "react";
import { FaSpinner } from "react-icons/fa";

interface ISubmitButtonProps {
  submitting?: boolean;
  onSubmit?: () => void;
}

const SubmitButton: React.FC<PropsWithChildren<ISubmitButtonProps>> = ({
  children,
  submitting,
  onSubmit,
}) => {
  return (
    <button
      onSubmit={onSubmit}
      type="submit"
      className="flex w-full justify-center cursor-pointer bg-purple-primary text-white font-bold text-sm px-4 py-2 rounded-[20px] hover:bg-purple-hover"
    >
      {submitting ? <FaSpinner className="spinner" size={30} /> : <>{children}</>}
    </button>
  );
};

export default SubmitButton;
