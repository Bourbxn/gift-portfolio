import { projects } from "../../constants/projects";
import { Banner } from "../../features/banner";
import { Introduce } from "../../features/introduce";
import { Projects } from "../../features/projects";

function LandingPage() {
  return (
    <>
      <Banner />
      <Introduce />
      <div className="px-[108px]">
        <Projects title="Projects Experience" projects={projects.slice(0, 6)} />
      </div>
    </>
  );
}

export default LandingPage;
