import React, { useState } from "react";
import { TaskProps } from "./ColumnData";
import Modal from "../modal/Modal";
import { IoEllipsisVertical } from "react-icons/io5";
import { ArrowDownIcon } from "../icons";
import { useBoardContext } from "../../context";
import EditTaskForm from "../forms/EditTaskForm";
import Popup from "../forms/Popup";
import useClickOutside from "../../hooks/useClickOutside";

const Row = ({ title, description, status, subtasks }: TaskProps) => {
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showStatusList, setShowStatusList] = useState(false);
  const { activeBoardColums } = useBoardContext();
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

  const { ref } = useClickOutside({
    onClickOutside() {
      setShowDropdown(false);
    },
  });

  // const ref = useDetectClickOutside({
  //   onTriggered: () => {
  //     setShowDropdown(false);
  //   },
  // });

  const statuses = activeBoardColums.map(({ name }) => ({ name }));

  const numOfIncompleteTask = subtasks.filter((subtask) => {
    return subtask.isCompleted === true;
  });
  return (
    <React.Fragment key={`${title}-${description}`}>
      <div
        className="p-6 rounded-md bg-white dark:bg-gray-dark shadow-lg mb-4 w-[280px]"
        onClick={() => setShowTaskDetails(true)}
      >
        <h3 className="text-black dark:text-white text-base font-bold dark:hover:text-purple-primary hover:text-purple-primary cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-medium text-sm font-bold">
          {numOfIncompleteTask.length} of {subtasks.length} substasks
        </p>
      </div>

      <Modal
        showModal={showTaskDetails}
        onClick={() => {
          setShowTaskDetails(false);
          setShowStatusList(false);
          setShowDropdown(false);
        }}
        type="full"
      >
        <div
          className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md h-[95%] overflow-y-auto"
          onClick={(e: any) => e.stopPropagation()}
        >
          <div className="header_section flex space-x-4 justify-between items-center relative mb-4">
            <h3 className="font-bold text-lg dark:text-white">{title}</h3>
            <div
              ref={ref}
              onClick={(e) => {
                setShowDropdown(!showDropdown);
              }}
            >
              <IoEllipsisVertical
                size={20}
                className="text-gray-medium cursor-pointer"
              />
              {showDropdown && (
                <div className="text-gray-medium font-base p-4 space-y-4 absolute drop-shadow cursor-pointer top-16 md:top-12 right-0 rounded-lg w-[180px] bg-white dark:bg-gray-very-dark whitespace-nowrap">
                  <p
                    onClick={() => {
                      setShowEditTaskForm(true);
                    }}
                  >
                    Edit Task
                  </p>
                  <p
                    className="text-[#EA5555]"
                    onClick={() => setShowDeleteTaskModal(true)}
                  >
                    Delete Task
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="description mb-4">
            <p className="text-gray-medium font-medium text-[13px]">
              {description}
            </p>
          </div>

          <div className="subtasks mb-2">
            <p className="dark:text-white text-xs font-bold">
              Subtasks ({numOfIncompleteTask.length} of {subtasks.length})
            </p>
          </div>

          <div className="subtask_list mb-8">
            {subtasks.map(({ title, isCompleted }) => (
              <TaskCheckList
                title={title}
                isCompleted={isCompleted}
                key={title}
              />
            ))}
          </div>

          <div className="status relative">
            <h3 className="text-xs font-bold text-gray-medium dark:text-white mb-2">
              Current Status
            </h3>
            <div
              className="py-2 px-3 border border-purple-primary rounded dark:text-white text-[13px]"
              onClick={(e) => {
                e.stopPropagation();
                setShowStatusList(!showStatusList);
              }}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <p>{status}</p>
                <div>
                  <ArrowDownIcon />
                </div>
              </div>
            </div>

            {showStatusList && (
              <div className="absolute bg-white dark:bg-gray-very-dark w-full p-3 drop-shadow text-gray-medium text-[13px] rounded overflow-y-auto">
                {statuses.map(({ name }) => (
                  <li key={name} className="p-1 list-none">
                    {name}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal>

      <Modal
        showModal={showEditTaskForm}
        onClick={() => {
          setShowEditTaskForm(false);
          setShowTaskDetails(false);
          setShowStatusList(false);
          setShowDropdown(false);
        }}
        type="full"
      >
        <div
          className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md h-[95%] overflow-y-auto"
          onClick={(e: any) => e.stopPropagation()}
        >
          <EditTaskForm
            title={title}
            description={description}
            subtasks={subtasks}
            status={status}
          />
        </div>
      </Modal>

      <Modal
        showModal={showDeleteTaskModal}
        onClick={() => {
          setShowDeleteTaskModal(false);
          setShowDropdown(false);
        }}
        type="full"
      >
        <div
          className="w-[90%] md:w-2/4 p-6 bg-white dark:bg-gray-dark rounded-md md:h-[229px] h-[284px] overflow-y-auto"
          onClick={(e: any) => e.stopPropagation()}
        >
          <Popup
            name={`'${title}'`}
            type="task"
            onClick={() => {
              setShowDeleteTaskModal(false);
              setShowDropdown(false);
            }}
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};

const TaskCheckList = ({
  title,
  isCompleted,
}: {
  title: string;
  isCompleted: boolean;
}) => {
  return (
    <div className="flex dark:text-white space-x-2 bg-gray-light dark:bg-gray-very-dark mb-2 items-center p-3 rounded-md cursor-pointer hover:bg-purple-hover hover:bg-opacity-50 dark:hover:bg-purple-hover dark:hover:bg-opacity-50">
      <input
        type="checkbox"
        name="isCompleted"
        id="isCompleted"
        checked={isCompleted}
        readOnly={true}
      />
      <div
        className={`status_dropdown text-xs font-bold ${
          isCompleted ? "line-through text-gray-medium" : ""
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Row;
