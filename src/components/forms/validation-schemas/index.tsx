import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("Please enter your firstname")
    .min(3, "Firstname should contain atleast 3 characters"),
  lastname: Yup.string()
    .required("Please enter your lastname")
    .min(3, "Lastname should contain atleast 3 characters"),
  email: Yup.string().email("Invalid email address").required("Please provide a valid email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 1 uppercase letter, lowercase letter, number and 1 special character",
    )
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Please provide a valid email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const AddNewBoardValidationSchema = Yup.object().shape({
  board_name: Yup.string()
    .required("Please enter a name for the board")
    .min(3, "Board Name should contain at least 3 characters"),
  board_columns: Yup.array().of(
    Yup.string()
      .required("Please enter a column name")
      .min(3, "Column Name should contain at least 3 characters"),
  ),
});

export const AddTaskValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Please enter task title")
    .min(3, "Title should contain at least 3 characters"),
  subtasks: Yup.array().of(
    Yup.string()
      .required("Please enter a Subtask")
      .min(3, "Subtask should contain at least 3 characters"),
  ),
});
