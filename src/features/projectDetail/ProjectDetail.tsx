import React from "react";
import type { Section } from "../../constants/projects";
import SectionDetailCard from "./components/SectionDetailCard";

interface Props {
    sections: Section[];
}

function ProjectDetail({ sections }: Props) {
    return (
        <div className="md:space-y-[32px] space-y-[16px] md:pb-0 pb-[32px]">
            {sections.map(({ title, details }) => (
                <React.Fragment key={title}>
                    <h2 className="md:text-h2-proj-detail text-h2-proj-detail-mb text-secondary font-bold ">
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
