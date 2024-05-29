import DeleteButton from "../buttons/DeleteButton";
import SecondaryButton from "../buttons/SecondaryButton";

interface IPopupProps {
  type: "board" | "task";
  name: string;
  onClick: () => void;
}
const Popup = ({ type, name, onClick }: IPopupProps) => {
  return (
    <div>
      <h2 className="text-[#EA5555] font-semibold text-lg mb-6">
        {`Delete this ${type}?`}
      </h2>
      {type === "board" ? (
        <p className="text-gray-medium text-sm font-medium mb-4">
          Are you sure you want to delete the {`${name} ${type}?`} This action
          will remove all columns and tasks and cannot be reversed.
        </p>
      ) : (
        <p className="text-gray-medium text-sm font-medium mb-4">
          Are you sure you want to delete the {`${name} ${type}`} and its
          subtasks? This action cannot be reversed.
        </p>
      )}

      <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
        <DeleteButton>Delete</DeleteButton>
        <SecondaryButton onClick={onClick}>Cancel</SecondaryButton>
      </div>
    </div>
  );
};

export default Popup;
