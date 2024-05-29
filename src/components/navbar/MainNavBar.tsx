import { IoEllipsisVertical } from "react-icons/io5";
import { LogoIcon } from "../icons";
import { IoIosAdd } from "react-icons/io";
import ActionButton from "../buttons/ActionButton";
import BoardDropDown from "../dropdowns/BoardDropDown";
import { useState } from "react";
import { useBoardContext } from "../../context/BoardContext";
import { useFullScreenContext } from "../../context/FullScreenContext";
import LogoComponent from "../LogoComponent";
import Modal from "../modal/Modal";
import AddTaskForm from "../forms/AddTaskForm";
import EditBoardForm from "../forms/EditBoardForm";
import Popup from "../forms/Popup";
import useClickOutside from "../../hooks/useClickOutside";

const MainNavBar = () => {
  const { selectedBoard, boardCount } = useBoardContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const { fullScreenEnabled } = useFullScreenContext();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showEditBoardForm, setShowEditBoardForm] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const { ref } = useClickOutside({
    onClickOutside() {
      setShowDropdown(false);
    },
  });

  return (
    <nav className="w-full bg-white px-4 py-6 drop-shadow-md dark:bg-gray-dark sticky top-0">
      <div className="logo_container flex w-full justify-between">
        {boardCount > 0 ? (
          <div className="flex space-x-4 md:space-x-2 items-center">
            <div className="md:hidden">
              <LogoIcon />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {fullScreenEnabled ? (
                <div className="border-r border-[#979797] pr-6">
                  <LogoComponent />
                </div>
              ) : null}
              <h1 className="hidden md:block font-bold text-lg text-black dark:text-white">
                {selectedBoard.name}
              </h1>
            </div>

            <div className="md:hidden">
              <BoardDropDown />
            </div>
          </div>
        ) : null}

        {/* Right Side of the NavBar */}
        <div>
          <div className="container flex items-center space-x-2 relative">
            <ActionButton disabled={boardCount === 0}>
              <div
                className="flex items-center"
                onClick={() => setShowAddTaskForm(true)}
              >
                <IoIosAdd
                  className="text-white mt-0.2"
                  size={20}
                  color="#fff"
                />
                <div className="hidden md:block">Add New Task</div>
              </div>
            </ActionButton>
            <div
              ref={ref}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <IoEllipsisVertical
                size={35}
                className="text-gray-medium cursor-pointer"
              />
              {showDropdown && (
                <div className="text-gray-medium font-base p-4 space-y-4 absolute cursor-pointer top-12 -left-24 md:-left-2 rounded-lg w-[180px] bg-white dark:bg-gray-very-dark whitespace-nowrap">
                  <p onClick={() => setShowEditBoardForm(true)}>Edit Board</p>
                  <p
                    onClick={() => setShowDeleteBoardModal(true)}
                    className="text-[#EA5555]"
                  >
                    Delete Board
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Modal
          showModal={showAddTaskForm}
          onClick={() => {
            setShowAddTaskForm(false);
          }}
          type="full"
        >
          <div
            className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md h-[95%] overflow-y-auto"
            onClick={(e: any) => e.stopPropagation()}
          >
            <AddTaskForm />
          </div>
        </Modal>

        <Modal
          showModal={showEditBoardForm}
          onClick={() => {
            setShowEditBoardForm(false);
            setShowDropdown(false);
          }}
          type="full"
        >
          <div
            className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md h-[95%] overflow-y-auto"
            onClick={(e: any) => e.stopPropagation()}
          >
            <EditBoardForm />
          </div>
        </Modal>

        <Modal
          showModal={showDeleteBoardModal}
          onClick={() => {
            setShowDeleteBoardModal(false);
            setShowDropdown(false);
          }}
          type="full"
        >
          <div
            className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md md:h-[229px] h-[284px] overflow-y-auto"
            onClick={(e: any) => e.stopPropagation()}
          >
            <Popup
              name={`'${selectedBoard.name}'`}
              type="board"
              onClick={() => {
                setShowDeleteBoardModal(false);
                setShowDropdown(false);
              }}
            />
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default MainNavBar;
