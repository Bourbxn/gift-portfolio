import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const ProjectsPage = lazy(() => import("./pages/projectsPage/ProjectsPage"));
const ProjectDetailPage = lazy(
  () => import("./pages/projectDetailPage/ProjectDetailPage"),
);
const AboutMePage = lazy(() => import("./pages/aboutMePage/AboutMePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:nameSlug", element: <ProjectDetailPage /> },
      { path: "/about-me", element: <AboutMePage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
