import AuthLayout from "../../components/layout/AuthLayout";
import { Field, FieldProps, Form, Formik } from "formik";
import SubmitButton from "../../components/buttons/SubmitButton";
import Input from "../../components/forms/Input";
import { SignUpValidationSchema } from "../../components/forms/validation-schemas";

const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  return (
    <AuthLayout>
      <div className="flex justify-center bg-white dark:bg-gray-very-dark px-4 py-12 rounded-md md:mx-[400px]">
        <div className="w-full md:w-2/3">
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpValidationSchema}
            onSubmit={(values) => {
              console.log("Hello");
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <h2 className="text-black font-bold text-lg mb-6 dark:text-white">Sign Up</h2>
                <div className="firstname flex flex-col mb-4">
                  {/* The name props is used to associate each field with an object key in the initial value object */}
                  {/* See https://formik.org/docs/api/field */}
                  <Field name="firstname">
                    {({ field, form, meta }: FieldProps) => (
                      <Input
                        field={field}
                        form={form}
                        meta={meta}
                        inputType="text"
                        label="Firstname"
                      />
                    )}
                  </Field>
                </div>

                <div className="lastname flex flex-col mb-4">
                  {/* The name props is used to associate each field with an object key in the initial value object */}
                  {/* See https://formik.org/docs/api/field */}
                  <Field name="lastname">
                    {({ field, form, meta }: FieldProps) => (
                      <Input
                        field={field}
                        form={form}
                        meta={meta}
                        inputType="text"
                        label="Lastname"
                      />
                    )}
                  </Field>
                </div>

                <div className="email flex flex-col mb-4">
                  {/* The name props is used to associate each field with an object key in the initial value object */}
                  {/* See https://formik.org/docs/api/field */}
                  <Field name="email">
                    {({ field, form, meta }: FieldProps) => (
                      <Input
                        field={field}
                        form={form}
                        meta={meta}
                        inputType="text"
                        label="E-mail"
                      />
                    )}
                  </Field>
                </div>

                <div className="password flex flex-col mb-8">
                  <Field name="password">
                    {({ field, form, meta }: FieldProps) => (
                      <Input
                        field={field}
                        form={form}
                        meta={meta}
                        inputType="password"
                        label="Password"
                      />
                    )}
                  </Field>
                </div>
                <SubmitButton>Sign Up</SubmitButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
