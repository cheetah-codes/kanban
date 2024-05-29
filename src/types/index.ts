export interface IColumn {
  name: string;
  tasks: ITaskType[];
}

export interface ITaskType {
  title: string;
  description: string;
  status: string;
  subtasks: ISubtaskType[];
}

export interface ISubtaskType {
  title: string;
  isCompleted: boolean;
}
