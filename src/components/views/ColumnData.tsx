import React, { useState } from "react";
import Row from "./Row";

export interface TaskProps {
  title: string;
  description: string;
  status: string;
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
  onClick?: () => void;
}

interface IColumnDataProps {
  tasks: TaskProps[];
}

const ColumnData = ({ tasks }: IColumnDataProps) => {
  return (
    <React.Fragment>
      <div className="w-[300px]">
        {tasks.map(({ title, status, description, subtasks }) => (
          <Row
            key={`${title}-${description}`}
            title={title}
            status={status}
            description={description}
            subtasks={subtasks}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ColumnData;
