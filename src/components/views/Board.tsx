import data from "../../data.json";
import { IoIosAdd } from "react-icons/io";
import ColumnData from "./ColumnData";
import { useEffect, useState } from "react";
import { IColumn } from "../../types";
import { useBoardContext } from "../../context/BoardContext";

interface IActiveBoardColums {}

const Board = () => {
  const { activeBoardColums } = useBoardContext();
  const [colors, setColors] = useState<string[]>([]);
  // const availableBoard = data.boards;
  // let columns = availableBoard.map(({ columns }) => columns);
  // let platformLaunch = columns[0];

  const columnColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  useEffect(() => {
    const colorsArray: string[] = [];
    for (let i = 0; i < activeBoardColums.length; i++) {
      const color = columnColor();
      colorsArray.push(color);
    }

    setColors(colorsArray);
  }, []);

  return (
    <section className="board_container">
      <div className="column_container">
        <div className="flex justify-between">
          {activeBoardColums.map(({ name, tasks }, index) => (
            <div
              className="w-[400px] max-w-[500px] mr-8"
              key={`${name}-${index}`}
            >
              <div className="flex items-center mb-4 space-x-2 w-full">
                <div
                  className={`h-3 w-3 rounded-full`}
                  style={{ backgroundColor: colors[index] }}
                ></div>
                <h3 className="font-normal text-gray-medium text-sm uppercase">
                  {name}
                  <span className="ml-1">({tasks.length})</span>
                </h3>
              </div>

              <ColumnData tasks={tasks} />
            </div>
          ))}

          <div className="new_board h-screen px-4 w-[250px]">
            <div className="h-full flex justify-center rounded-lg bg-gradient-to-b from-[#E9EFFA]/100 to-[#E9EFFA]/50 dark:bg-gradient-to-b dark:from-[#2B2C3740]/25 dark:to-[#2B2C3720]/12.5">
              <div className="flex items-center justify-center text-gray-medium whitespace-nowrap p-8 text-xl font-medium">
                <div className="flex hover:text-purple-primary cursor-pointer">
                  <IoIosAdd className="text-inherit" size={30} />
                  <div className="hover:text-purple-primary">New Column</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
