import { useState } from "react";
import LogoComponent from "../LogoComponent";
import { useBoardContext, useFullScreenContext } from "../../context";
import { BoardIcon } from "../icons";
import ThemeSwitcher from "../themeswitcher";
import { MdVisibilityOff } from "react-icons/md";
import Modal from "../modal/Modal";
import AddNewBoard from "../forms/AddNewBoard";

const SideNav = () => {
  const [showCreateBoardForm, setShowCreateBoardForm] = useState(false);

  const { boards, selectedBoard, setSelectedBoard } = useBoardContext();
  const { setFullScreen } = useFullScreenContext();
  return (
    <div className="bg-white dark:bg-gray-dark md:w-full md:h-full flex flex-col">
      <div className="px-6 py-6 mb-6">
        <LogoComponent />
      </div>
      <div className="whitespace-nowrap">
        <h3 className="mb-4 px-6 text-gray-medium text-sm font-normal uppercase">
          All Boards ({boards.length})
        </h3>

        <div className="board_list_container cursor-pointer">
          {boards.length > 0 ? (
            <ul>
              {boards.map(({ name }: { name: string }) => (
                <li
                  key={name}
                  className={`flex items-center space-x-2 mr-4 py-3 last:mb-4 ${
                    selectedBoard.name === name
                      ? "bg-purple-primary text-white rounded-tr-3xl rounded-br-3xl"
                      : "text-gray-medium hover:bg-gray-light dark:hover:bg-white hover:text-purple-primary hover:rounded-tr-full hover:rounded-br-full"
                  }`}
                  onClick={() => {
                    setSelectedBoard({ name });
                  }}
                >
                  <div className="flex items-center space-x-2 px-6">
                    <BoardIcon />
                    <span className="font-medium">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="add_new_board cursor-pointer">
          <div
            className="flex items-center space-x-2 mb-4 px-6 text-purple-primary font-medium"
            onClick={() => setShowCreateBoardForm(true)}
          >
            <BoardIcon />
            <h4>+ Create New Board</h4>
          </div>
        </div>
      </div>

      <Modal
        showModal={showCreateBoardForm}
        onClick={() => {
          setShowCreateBoardForm(false);
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

      <div className="mt-auto mb-[47px]" onClick={(e) => e.stopPropagation()}>
        <div className="px-6">
          <ThemeSwitcher />
        </div>
        <div
          className="flex space-x-4 mt-1 mr-4 text-[15px] px-6 py-3 cursor-pointer font-bold text-gray-medium items-center hover:bg-gray-light dark:hover:bg-white hover:text-purple-primary hover:rounded-tr-full hover:rounded-br-full"
          onClick={() => setFullScreen(true)}
        >
          <MdVisibilityOff size={20} className="mr-2 text-inherit" />
          Hide Sidebar
        </div>
      </div>
    </div>
  );
};

export default SideNav;
