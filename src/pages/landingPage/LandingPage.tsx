import { projects } from "../../constants/projects";
import { Banner } from "../../features/banner";
import { Introduce } from "../../features/introduce";
import { Projects } from "../../features/projects";

function LandingPage() {
  return (
    <>
      <div className="md:pt-0 pt-[66px]">
        <Banner />
      </div>
      <Introduce />
      <div className="md:px-[108px] px-[16px] md:py-0 py-[32px]">
        <Projects title="Projects Experience" projects={projects.slice(0, 6)} />
      </div>
    </>
  );
}

export default LandingPage;
