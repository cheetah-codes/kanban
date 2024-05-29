import { useState } from "react";
import ActionButton from "../buttons/ActionButton";
import { IoIosAdd } from "react-icons/io";
import { useBoardContext } from "../../context/BoardContext";
import Board from "./Board";

const HomeView = () => {
  const { activeBoardColums } = useBoardContext();
  // const [column, setColumn] = useState([1]);

  // console.log(activeBoardColums);

  return activeBoardColums.length <= 0 ? (
    <div className="h-screen flex justify-center items-center my-auto">
      <div className="px-4">
        <p className="text-center text-bold text-lg text-gray-medium">
          This board is empty. Create a new
        </p>
        <p className="text-center text-bold text-lg text-gray-medium">
          column to get started.
        </p>
        <div className="px-8 mt-4">
          <ActionButton>
            <div className="flex items-center">
              <IoIosAdd className="text-white mt-0.2" size={20} color="#fff" />
              <div>Add New Column</div>
            </div>
          </ActionButton>
        </div>
      </div>
    </div>
  ) : (
    <div className="overflow-x-auto  p-4 md:p-6">
      <Board />
    </div>
  );
};

export default HomeView;
