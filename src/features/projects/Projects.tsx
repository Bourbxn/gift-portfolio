import { useNavigate } from "react-router-dom";
import { RoundedButton } from "../../components";
import { type Project } from "../../constants/projects";
import { projects as constantProjects } from "../../constants/projects";
import ProjectCard from "./components/ProjectCard";

interface Props {
    title: string;
    projects: Project[];
}

function Projects({ title, projects }: Props) {
    let navigate = useNavigate();
    return (
        <div>
            <h2 className="md:text-h2 text-h3-proj-detail text-secondary font-bold md:pb-[48px] pb-[24px]">
                {title}
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[48px] gap-[24px] md:pb-[48px] pb-[24px]">
                {projects.map((proj) => (
                    <ProjectCard {...proj} key={proj.name} />
                ))}
            </div>
            {constantProjects.length !== projects.length && (
                <div>
                    <RoundedButton
                        title="View All Projects"
                        onClick={() => {
                            navigate("/projects");
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Projects;
