import AuthLayout from "../../components/layout/AuthLayout";
import { Field, FieldProps, Form, Formik } from "formik";
import SubmitButton from "../../components/buttons/SubmitButton";
import Input from "../../components/forms/Input";
import { LoginValidationSchema } from "../../components/forms/validation-schemas";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <AuthLayout>
      <div className="flex justify-center bg-white dark:bg-gray-very-dark px-4 py-12 rounded-md md:mx-[400px]">
        <div className="w-full md:w-2/3">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginValidationSchema}
            onSubmit={(values) => {
              console.log("Hello");
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <h2 className="text-black font-bold text-lg mb-6 dark:text-white">Login</h2>

                <div className="email flex flex-col mb-4">
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
                <SubmitButton>Login</SubmitButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
