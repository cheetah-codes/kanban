import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IFullScreenContext {
  fullScreenEnabled: boolean;
  setFullScreenEnabled: Dispatch<SetStateAction<boolean>>;
  setFullScreen: (fullScreenEnabled: boolean) => void;
}

export const FullScreenContext = createContext<IFullScreenContext>({
  fullScreenEnabled: false,
  setFullScreenEnabled: () => {},
  setFullScreen: (fullScreenEnabled: boolean) => {},
});

export const FullScreenContextProvider = ({
  children,
}: PropsWithChildren<any>) => {
  const isFullScreen = JSON.parse(localStorage.getItem("fullScreen")!);
  const [fullScreenEnabled, setFullScreenEnabled] = useState(isFullScreen);

  const setFullScreen = (fullScreenEnabled: boolean) => {
    setFullScreenEnabled(fullScreenEnabled);
    localStorage.setItem("fullScreen", JSON.stringify(fullScreenEnabled));
  };

  useEffect(() => {
    console.log("Enabled - %o", fullScreenEnabled);
  }, [fullScreenEnabled]);

  return (
    <FullScreenContext.Provider
      value={{ fullScreenEnabled, setFullScreenEnabled, setFullScreen }}
    >
      <>{children}</>
    </FullScreenContext.Provider>
  );
};

export const useFullScreenContext = () => {
  const screenData = useContext(FullScreenContext);
  const { fullScreenEnabled, setFullScreenEnabled, setFullScreen } = screenData;
  return { fullScreenEnabled, setFullScreenEnabled, setFullScreen };
};
