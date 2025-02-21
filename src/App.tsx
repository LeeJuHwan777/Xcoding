import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "/create-account",
    element: <CreateAccount />
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
