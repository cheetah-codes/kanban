import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MainViewPortal = ({ children }: PropsWithChildren<unknown>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.getElementById("main_layout") as HTMLElement
      )
    : null;
};

export default MainViewPortal;
