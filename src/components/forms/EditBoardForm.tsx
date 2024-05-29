import { useState } from "react";
import { Field, FieldProps, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import SubmitButton from "../../components/buttons/SubmitButton";
import { CancelIcon } from "../icons";
import SecondaryButton from "../buttons/SecondaryButton";
import { useBoardContext } from "../../context";
import Input from "./Input";
import { AddNewBoardValidationSchema } from "./validation-schemas";

const EditBoardForm = () => {
  const { activeBoardColums, selectedBoard } = useBoardContext();
  const [initialValues, setInitialValues] = useState({
    board_name: selectedBoard.name,
    board_columns: activeBoardColums.map(({ name }) => name),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewBoardValidationSchema}
      onSubmit={(values) => {
        console.log("Hello");
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <h2 className="text-black font-bold text-lg mb-6 dark:text-white">Edit Board</h2>
          <div className="board_name flex flex-col mb-4">
            <Field name="board_name">
              {({ field, form, meta }: FieldProps) => (
                <Input
                  field={field}
                  form={form}
                  meta={meta}
                  inputType="text"
                  label="Board Name"
                  placeholder={`e.g. Web Design`}
                  className="dark:bg-gray-dark placeholder:text-xs"
                />
              )}
            </Field>
          </div>

          <div className="board_column flex flex-col mb-4">
            <label
              htmlFor="board_column"
              className="text-sm font-bold text-gray-medium pb-2 dark:text-white"
            >
              Board Columns
            </label>
            <div className="board_columns">
              <FieldArray
                name="board_columns"
                render={(arrayHelpers: any) => {
                  const board_columns: string[] = values.board_columns;

                  return (
                    <div>
                      {board_columns && board_columns.length > 0
                        ? board_columns.map((_, index: number) => (
                            <div key={`${index}`}>
                              <div
                                className="flex items-center w-full mb-4 space-x-4"
                                key={`${index}`}
                              >
                                <div className="board_name flex flex-col w-[90%]">
                                  <Field name={`board_columns[${index}]`}>
                                    {({ field, form, meta }: FieldProps) => (
                                      <Input
                                        field={field}
                                        form={form}
                                        meta={meta}
                                        inputType="text"
                                        placeholder={`e.g. Done`}
                                        className="dark:bg-gray-dark placeholder:text-xs"
                                      />
                                    )}
                                  </Field>
                                </div>

                                <div
                                  className="w-[5%] cursor-pointer"
                                  onClick={() => {
                                    if (board_columns.length <= 2) return;
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
                        + Add New Column
                      </SecondaryButton>
                      ;
                    </div>
                  );
                }}
              />
            </div>
          </div>

          <SubmitButton>Save Changes</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default EditBoardForm;
