import { projects } from "../../constants/projects";
import { Banner } from "../../features/banner";
import { Introduce } from "../../features/introduce";
import { Projects } from "../../features/projects";

function LandingPage() {
  return (
    <>
      <Banner />
      <Introduce />
      <Projects title="Projects Experience" projects={projects.slice(6)} />
    </>
  );
}

export default LandingPage;
