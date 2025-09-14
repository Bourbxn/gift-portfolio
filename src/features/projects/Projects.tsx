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
            <h2 className="text-h2 text-secondary font-bold pb-[48px]"> {title}</h2>
            <div className="grid grid-cols-2 gap-[48px] pb-[48px]">
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
                            scrollTo({ top: 0 });
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Projects;
