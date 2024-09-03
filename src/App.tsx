import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./features/mainLayout/HomePage";
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
