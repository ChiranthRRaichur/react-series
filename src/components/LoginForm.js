import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";


const LoginForm = () => {
    const navigate = useNavigate();
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

   const onSubmit = (values, { setSubmitting }) => {
    // ✅ simulate login success
    setTimeout(() => {
      console.log("Logged in:", values);

      setSubmitting(false);

      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }, 400);
  };

  return (
    <div className="form-container">
      <div className="login-card">
        <h2>Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" className="error-text" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" className="error-text" />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
