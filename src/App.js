import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorr from "./components/Errorr";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoggedUserContext from "./utils/LoggedUserContext";
// to use redux store, use this import
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

// for login
const AuthLayout = () => {
  return (
    <div className="appContainer">
      <Outlet />
    </div>
  );
};

//  Layout WITH header (for other pages)
const AppLayout = () => {
  const [username, setUsername] = useState(null);

  // ✅ Load username from localStorage (on refresh also)
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  return (
    <Provider store={appStore}>
      <LoggedUserContext.Provider value={{ username, setUsername }}>
        <div className="appContainer">
          <Header />
          <Outlet />
        </div>
      </LoggedUserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  // ✅ Auth Routes (NO HEADER)
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Errorr />,
    children: [
      {
        index: true, // default route
        element: <LoginForm />,
      },
    ],
  },

  // ✅ Main App Routes (WITH HEADER)
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorr />,
    children: [
      {
        path: "home",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
