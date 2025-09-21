import { circle1 } from "../../../assets";
import { BulletList } from "../../../components";
import type { WorkExperience } from "../../../types/resume";
import SectionHeader from "./SectionHeader";

interface Props {
    workExperiences: WorkExperience[];
}

function WorkExpSection({ workExperiences }: Props) {
    return (
        <div>
            <SectionHeader msg="Work Experience" />
            <div className="md:space-y-[16px] space-y-[8px]">
                {workExperiences.map(
                    ({ position, company, dateStart, dateEnd, works }) => (
                        <div key={`${company}.${position}`}>
                            <div className="flex items-center gap-x-[16px] pb-[8px]">
                                <img
                                    src={circle1}
                                    className="md:w-[16px] md:h-[16px] w-[12px] h-[12px]"
                                />
                                <h3 className="font-bold md:text-h3-proj-detail text-description text-small">
                                    {position} — {company}
                                </h3>
                            </div>
                            <div className="border-l-[1px] border-l-secondary md:pl-[8px] pl-[6px] md:ml-[8px] ml-[6px]">
                                <p className="md:text-normal text-small text-description font-normal pl-[16px] md:pb-[8px] pb-[4px]">
                                    {dateStart} - {dateEnd}
                                </p>
                                {works.map((work, index) => (
                                    <BulletList key={index} msg={work} line={true} />
                                ))}
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}

export default WorkExpSection;
