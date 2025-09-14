import React from "react";
import type { Section } from "../../constants/projects";
import SectionDetailCard from "./components/SectionDetailCard";

interface Props {
    sections: Section[];
}

function ProjectDetail({ sections }: Props) {
    return (
        <div className="space-y-[32px]">
            {sections.map(({ title, details }) => (
                <React.Fragment key={title}>
                    <h2 className="text-h2-proj-detail text-secondary font-bold ">
                        {title}
                    </h2>
                    {details.map((detail) => (
                        <SectionDetailCard key={detail.title} detail={detail} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default ProjectDetail;
