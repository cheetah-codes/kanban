import React, { PropsWithChildren } from "react";
import { FaSpinner } from "react-icons/fa";

interface IDeleteButtonProps {
  submitting?: boolean;
  onClick?: () => void;
}

const DeleteButton: React.FC<PropsWithChildren<IDeleteButtonProps>> = ({
  children,
  submitting,
  onClick,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex w-full justify-center cursor-pointer bg-[#EA5555] text-white text-bold text-sm px-4 py-2 rounded-[20px] hover:bg-[#FF9898]"
    >
      {submitting ? (
        <FaSpinner className="spinner" size={30} />
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default DeleteButton;
