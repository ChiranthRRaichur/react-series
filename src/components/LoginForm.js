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
    setTimeout(() => {
      console.log("Logged in:", values);
      setSubmitting(false);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Please enter your details to login</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              {/* Email Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full px-4 py-3 rounded-lg border transition-all outline-none focus:ring-2 
                    ${errors.email && touched.email 
                      ? "border-red-500 focus:ring-red-200" 
                      : "border-gray-300 focus:border-orange-500 focus:ring-orange-200"
                    }`}
                />
                <ErrorMessage name="email" component="div" className="text-xs text-red-500 font-medium mt-1" />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg border transition-all outline-none focus:ring-2 
                    ${errors.password && touched.password 
                      ? "border-red-500 focus:ring-red-200" 
                      : "border-gray-300 focus:border-orange-500 focus:ring-orange-200"
                    }`}
                />
                <ErrorMessage name="password" component="div" className="text-xs text-red-500 font-medium mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 active:scale-[0.98] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? <span className="text-orange-500 font-bold cursor-pointer hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;