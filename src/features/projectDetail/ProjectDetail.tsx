import type { Detail } from "../../types/projects";
import SectionDetailCard from "./components/SectionDetailCard";

interface Props {
    details: Detail[];
    splitCols: boolean;
}

function ProjectDetail({ details, splitCols }: Props) {
    return (
        <div
            className={`md:space-y-[32px] space-y-[16px] md:pb-0 pb-[32px] md:pt-[32px] pt-[16px] ${splitCols ? "grid md:grid-cols-2 md:gap-x-[64px] grid-cols-1" : ""} `}
        >
            {details.map((detail) => (
                <SectionDetailCard key={detail.title} detail={detail} />
            ))}
        </div>
    );
}

export default ProjectDetail;
