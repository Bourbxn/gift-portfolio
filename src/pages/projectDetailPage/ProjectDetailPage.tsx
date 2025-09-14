import { useParams } from "react-router-dom";
import { projects, type Project } from "../../constants/projects";
import slugify from "slugify";
import PageContainer from "../PageContainer";
import { ProjectOverview } from "../../features/projectOverview";
import { ProjectDetail } from "../../features/projectDetail";

function ProjectDetailPage() {
  const { nameSlug } = useParams();
  const { name, desc, img, role, responsibility, sections } = projects.find(
    (proj) => slugify(proj.name, { lower: true }) === nameSlug,
  ) as Project;
  return (
    <PageContainer>
      <ProjectOverview
        name={name}
        desc={desc}
        role={role}
        img={img}
        responsibility={responsibility}
      />
      <ProjectDetail sections={sections} />
    </PageContainer>
  );
}

export default ProjectDetailPage;
