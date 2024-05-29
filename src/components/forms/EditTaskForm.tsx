import { useState } from "react";
import { Formik, Form, FieldArray, Field, FieldProps } from "formik";
import SubmitButton from "../../components/buttons/SubmitButton";
import { CancelIcon } from "../icons";
import SecondaryButton from "../buttons/SecondaryButton";
import { ArrowDownIcon } from "../icons";
import { useBoardContext } from "../../context";
import { AddTaskValidationSchema } from "./validation-schemas";
import Input from "./Input";

interface IEditTaskProps {
  title: string;
  description: string;
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
  status: string;
}

const EditTaskForm = ({ title, description, subtasks, status }: IEditTaskProps) => {
  const [showStatusList, setShowStatusList] = useState(false);
  const { activeBoardColums } = useBoardContext();
  const statuses = activeBoardColums.map(({ name }) => ({ name }));

  const [initialValues, setInitialValues] = useState({
    title: title,
    description: description,
    subtasks: subtasks.map(({ title }) => title),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddTaskValidationSchema}
      onSubmit={(values) => {
        console.log("Hello");
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <h2 className="text-black font-bold text-lg mb-6 dark:text-white">Edit Task</h2>
          <div className="title flex flex-col mb-4">
            <Field name="title">
              {({ field, form, meta }: FieldProps) => (
                <Input
                  field={field}
                  form={form}
                  meta={meta}
                  inputType="text"
                  label="Title"
                  placeholder="e.g Take coffee break"
                  className="dark:bg-gray-dark placeholder:text-xs"
                />
              )}
            </Field>
          </div>

          <div className="description flex flex-col mb-4">
            <label
              htmlFor="description"
              className="text-sm font-bold text-gray-medium pb-2 dark:text-white"
            >
              Description
            </label>
            <textarea
              rows={5}
              name="description"
              id="description"
              value={values.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
              className="p-1.5 outline-none resize-none border border-[#828FA340] rounded text-sm dark:text-white dark:bg-gray-dark placeholder:text-xs"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            ></textarea>
          </div>

          <div className="subtasks flex flex-col mb-4">
            <label
              htmlFor="subtasks"
              className="text-sm font-bold text-gray-medium pb-2 dark:text-white"
            >
              Subtasks
            </label>
            <div className="subtasks">
              <FieldArray
                name="subtasks"
                render={(arrayHelpers: any) => {
                  const subtasks: string[] = values.subtasks;

                  return (
                    <div>
                      {subtasks && subtasks.length > 0
                        ? subtasks.map((_, index: number) => (
                            <div key={`${index}`}>
                              <div
                                className="flex items-center w-full mb-4 space-x-4"
                                key={`${index}`}
                              >
                                <div className="subtasks flex flex-col w-[90%]">
                                  <Field name={`subtasks[${index}]`}>
                                    {({ field, form, meta }: FieldProps) => (
                                      <Input
                                        field={field}
                                        form={form}
                                        meta={meta}
                                        inputType="text"
                                        placeholder={`e.g. Make Coffee`}
                                        className="dark:bg-gray-dark placeholder:text-xs"
                                      />
                                    )}
                                  </Field>
                                </div>

                                <div
                                  className="w-[5%] cursor-pointer"
                                  onClick={() => {
                                    if (subtasks.length <= 2) return;
                                    arrayHelpers.remove(index);
                                  }}
                                >
                                  <CancelIcon />
                                </div>
                              </div>
                            </div>
                          ))
                        : null}
                      <SecondaryButton onClick={() => arrayHelpers.push("")}>
                        + Add New Subtask
                      </SecondaryButton>
                      ;
                    </div>
                  );
                }}
              />
            </div>
          </div>

          <div className="status relative mb-4 mt-4">
            <h3 className="text-sm font-bold text-gray-medium dark:text-white mb-1">
              Current Status
            </h3>
            <div className="py-2 px-3 border border-purple-primary rounded dark:text-white text-[13px]">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStatusList(!showStatusList);
                }}
              >
                <p>{statuses[0].name}</p>
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

          <SubmitButton>Save Changes</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default EditTaskForm;
