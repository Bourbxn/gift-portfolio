import { useParams } from "react-router-dom";
import { projects } from "../../constants/projects";
import slugify from "slugify";
import PageContainer from "../PageContainer";
import { ProjectOverview } from "../../features/projectOverview";
import { ProjectDetail } from "../../features/projectDetail";
import type { Project } from "../../types/projects";

function ProjectDetailPage() {
  const { nameSlug } = useParams();
  const {
    name,
    desc,
    img,
    role,
    responsibility,
    title,
    demo,
    details,
    splitCols = false,
  } = projects.find(
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
        title={title}
        demo={demo}
      />
      <ProjectDetail details={details} splitCols={splitCols} />
    </PageContainer>
  );
}

export default ProjectDetailPage;
