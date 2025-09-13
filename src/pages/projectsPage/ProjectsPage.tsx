import { projects } from "../../constants/projects";
import { Projects } from "../../features/projects";
import PageContainer from "../PageContainer";

function ProjectsPage() {
    return (
        <PageContainer>
            <Projects title="All Projects" projects={projects} />
        </PageContainer>
    );
}

export default ProjectsPage;
