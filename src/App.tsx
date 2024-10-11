import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./features/mainLayout/HomePage";
import Services from "./features/pageServices/Services";
import Modals from "./features/modals/Modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SingleJobPage from "./features/mainLayout/singleJobPage/SingleJobPage";
import FavoriteJobs from "./features/mainLayout/favorites/FavoriteJobs";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/ad/:id",
        element: <SingleJobPage />,
      },
      {
        path: "/favorites",
        element: <FavoriteJobs />,
      },

    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Modals />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
