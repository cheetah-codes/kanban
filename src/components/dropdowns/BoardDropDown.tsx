import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, BoardIcon } from "../icons";
import ThemeSwitcher from "../themeswitcher";
import Modal from "../modal/Modal";
import data from "../../data.json";
import { useBoardContext } from "../../context/BoardContext";
import AddNewBoard from "../forms/AddNewBoard";

const BoardDropDown = () => {
  const { boards, setSelectedBoard, selectedBoard } = useBoardContext();

  // console.log(boards, selectedBoard);

  // const [boardCount, setBoardCount] = useState(boards.length);
  // const [activeBoard, setActiveBoard] = useState({ ...selectedBoard });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateBoardForm, setShowCreateBoardForm] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="font-bold text-base dark:text-white">
          {selectedBoard.name}
        </div>
        {showDropdown ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>

      <Modal
        type="main"
        showModal={showDropdown}
        onClick={() => setShowDropdown(false)}
      >
        <div
          className="absolute bg-white py-4 rounded-md top-4 w-[250px] dark:bg-gray-dark"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h3 className="mb-4 px-6 text-gray-medium text-sm font-normal uppercase">
              All Boards ({boards.length})
            </h3>

            <div className="board_list_container">
              <ul>
                {boards.map(({ name }: { name: string }) => (
                  <li
                    key={name}
                    className={`flex items-center space-x-2 mr-4 py-3 last:mb-4 ${
                      selectedBoard.name === name
                        ? "bg-purple-primary text-white rounded-tr-3xl rounded-br-3xl"
                        : "text-gray-medium"
                    }`}
                    onClick={() => {
                      setSelectedBoard({ name });
                      // setActiveBoard({ name });
                      setShowDropdown(false);
                    }}
                  >
                    <div className="flex items-center space-x-2 px-6">
                      <BoardIcon />
                      <span className="font-medium">{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="add_new_board">
              <div
                className="flex items-center space-x-2 mb-4 px-6 text-purple-primary font-medium"
                onClick={() => setShowCreateBoardForm(true)}
              >
                <BoardIcon />
                <h4>+ Create New Board</h4>
              </div>
            </div>

            <div className="px-6" onClick={(e) => e.stopPropagation()}>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        showModal={showCreateBoardForm}
        onClick={() => {
          setShowCreateBoardForm(false);
          setShowDropdown(false);
        }}
        type="full"
      >
        <div
          className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md h-[95%] overflow-y-auto"
          onClick={(e: any) => e.stopPropagation()}
        >
          <AddNewBoard />
        </div>
      </Modal>
    </div>
  );
};

export default BoardDropDown;
