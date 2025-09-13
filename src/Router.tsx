import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const ProjectsPage = lazy(() => import("./pages/projectsPage/ProjectsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
