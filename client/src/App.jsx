import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Admin,
  Stats,
  AllJobs,
  Profile,
  EditJob,
  DeleteJob,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";

import { loader as dashboardLayoutLoader } from "./pages/DashboardLayout";
import { loader as allJobsLoader } from "./pages/AllJobs";

import { action as editJobAction } from "./pages/EditJob";
import { loader as editJobLoader } from "./pages/EditJob";

import { action as deleteJobAction } from "./pages/DeleteJob";

import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";

import { loader as statsLoader } from "./pages/Stats";
const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
const isDarkThemeEnabled = checkDefaultTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        errorElement: <Error />,
        loader: dashboardLayoutLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },

          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            action: editJobAction,
            loader: editJobLoader,
          },
          {
            path: "delete-job/:id",
            element: <DeleteJob />,
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
