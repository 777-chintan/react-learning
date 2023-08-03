import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

// components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./utils/context/UserContext";
import store from "./utils/redux/store";
import Cart from "./components/Cart";
import ResMenuContainer from "./components/ResMenuContainer";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: null,
    avatar_url: null,
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <ResMenuContainer />
          </Suspense>
        ),
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
