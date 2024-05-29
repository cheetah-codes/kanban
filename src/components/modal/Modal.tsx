import { PropsWithChildren, useRef, useState } from "react";
import MainViewPortal from "./MainViewPortal";
import FullViewPortal from "./FullViewPortal";

const Modal: React.FC<
  PropsWithChildren<{
    type?: "main" | "full";
    showModal: boolean;
    onClick: (e: any) => void;
  }>
> = ({ children, type = "full", showModal, onClick }) => {
  return type === "full" ? (
    <>
      {showModal && (
        <FullViewPortal>
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={onClick}
          >
            <>{children}</>
          </div>
        </FullViewPortal>
      )}
    </>
  ) : (
    <>
      {showModal && (
        <MainViewPortal>
          <div
            className="fixed inset-x-0 bottom-0 top-[60px] flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClick}
          >
            <>{children}</>
          </div>
        </MainViewPortal>
      )}
    </>
  );
};

export default Modal;
