import {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
} from "react";
import data from "../data.json";
import { ITaskType } from "../types";

type TActiveBoardType = { name: string; tasks: ITaskType[] };

interface IBoardContextType {
  boardCount: number;
  selectedBoard: { name: string };
  setSelectedBoard: (selectedBoard: { name: string }) => void;
  boards: { name: string }[];
  activeBoardColums: TActiveBoardType[];
}

export const BoardContext = createContext<IBoardContextType>({
  boardCount: 0,
  selectedBoard: { name: "" },
  setSelectedBoard: (selectedBoard: { name: string }) => {},
  boards: [],
  activeBoardColums: [],
});

export const BoardContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [boardData, setBoardData] = useState<IBoardContextType>({
    boardCount: 0,
    selectedBoard: { name: "" },
    setSelectedBoard: () => {},
    boards: [],
    activeBoardColums: [],
  });

  const availableBoards = data.boards;

  let boards = availableBoards.map(({ name }) => {
    return { name };
  });

  const setSelectedBoard = (selectedBoard: { name: string }) => {
    let activeBoard = availableBoards.find(
      (board) => board.name === selectedBoard.name
    );

    console.log("Active Board - %o", activeBoard);
    setBoardData((prevState) => {
      return {
        ...prevState,
        selectedBoard,
        activeBoardColums: activeBoard?.columns || [],
      };
    });
  };

  useEffect(() => {
    setBoardData({
      boardCount: availableBoards.length,
      selectedBoard: boards[0],
      boards,
      setSelectedBoard,
      activeBoardColums: availableBoards[0].columns,
    });
  }, [...Object.keys(boardData)]);

  return (
    <BoardContext.Provider value={{ ...boardData }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  const boardData = useContext(BoardContext);
  const {
    boardCount,
    boards,
    selectedBoard,
    setSelectedBoard,
    activeBoardColums,
  } = boardData;

  return {
    boardCount,
    boards,
    selectedBoard,
    setSelectedBoard,
    activeBoardColums,
  };
};
