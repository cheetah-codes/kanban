import { FieldProps } from "formik";
import React from "react";

interface InputProps extends FieldProps {
  inputType: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  min?: number;
  className?: string;
  ref?: any;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  field,
  form,
  meta,
  inputType,
  label,
  className,
  ...props
}) => {
  //   console.log({ field, form, meta, inputType });

  return (
    <React.Fragment>
      {label && (
        <label
          htmlFor={label}
          className={`${
            meta.touched && meta.error ? "text-red-destroy" : "text-gray-medium"
          } text-sm font-bold pb-2 dark:text-white`}
        >
          <span>{label}</span>
        </label>
      )}
      <input
        type={inputType}
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error
            ? "border-red-destroy dark:border-red-destroy"
            : "border-[#828FA340] dark:border-[#828FA340]"
        } ${className} p-1.5 outline-none border rounded text-sm dark:text-white dark:bg-gray-dark`}
      />
      {meta.touched && meta.error && (
        <span className="text-xs mt-1 text-red-destroy">{meta.error}</span>
      )}
    </React.Fragment>
  );
};

export default Input;
