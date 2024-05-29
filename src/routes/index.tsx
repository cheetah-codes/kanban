import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import Home from "../pages/app";
import { FriendList } from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/app",
    element: <Home />,
  },
  {
    path: "/test",
    element: <FriendList />,
  },
]);
