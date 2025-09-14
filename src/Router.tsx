import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const ProjectsPage = lazy(() => import("./pages/projectsPage/ProjectsPage"));
const ProjectDetailPage = lazy(
  () => import("./pages/projectDetailPage/ProjectDetailPage"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:id", element: <ProjectDetailPage /> },
    ],
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
