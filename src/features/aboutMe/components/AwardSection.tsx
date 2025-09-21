import { BulletList } from "../../../components";
import type { Award } from "../../../types/resume";
import SectionHeader from "./SectionHeader";

interface Props {
    awards: Award[];
}

function AwardSection({ awards }: Props) {
    return (
        <div>
            <SectionHeader msg="Award" />
            {awards.map(({ contest, works }, index) => (
                <div key={index}>
                    <h3 className="md:text-h3-proj-detail text-small text-description font-normal pb-[8px]">
                        {contest}
                    </h3>
                    {works.map((work, index) => (
                        <BulletList key={index} msg={work} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AwardSection;
