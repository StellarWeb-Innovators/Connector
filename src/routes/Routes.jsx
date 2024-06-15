import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ChatBox from "../pages/home/common/chatBox/ChatBox";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "chat/:chatId",
            element: <ChatBox />
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      }
    ]
  },
]);