import { arrowUpRight } from "../../assets";
import { DEMO_TYPE } from "../../constants/constants";
import type { Demo } from "../../types/projects";

interface Props {
    name: string;
    desc: string;
    role: string;
    responsibility: string;
    img: string;
    title: string;
    demo?: Demo;
}

function ProjectOverview({
    name,
    desc,
    role,
    responsibility,
    img,
    title,
    demo,
}: Props) {
    return (
        <div>
            <h2 className="md:text-h2 text-h3-proj-detail text-secondary font-bold md:pb-[24px] pb-[16px]">
                {name}
            </h2>
            <div className="grid md:grid-cols-2 md:grid-cols-1 md:gap-[40px] gap-[8px]">
                <div>
                    <h3 className="md:text-h3 text-normal-mb text-black font-bold md:pb-0 pb-[8px]">
                        Project Overview:
                    </h3>
                    <p className="md:text-normal text-small text-description font-normal">
                        {desc}
                    </p>
                </div>
                <div>
                    <div className="pb-[8px] md:pb-0">
                        <h3 className="md:text-h3 text-normal-mb text-black font-bold md:pb-0 pb-[8px]">
                            Role:
                        </h3>
                        <p className="md:text-normal text-small text-description font-normal">
                            {role}
                        </p>
                    </div>
                    <div>
                        <h3 className="md:text-h3 text-normal-mb text-black font-bold md:pb-0 pb-[8px]">
                            Responsibility:
                        </h3>
                        <p className="md:text-normal text-small text-description font-normal">
                            {responsibility}
                        </p>
                    </div>
                </div>
            </div>
            <img src={img} alt="name" className="md:py-[44px] py-[24px]" />
            <div className="flex justify-between items-center">
                <h2 className="md:text-h2-proj-detail text-h2-proj-detail-mb text-secondary font-bold ">
                    {title}
                </h2>
                {demo && (
                    <a
                        className="flex items-center md:gap-x-[8px] gap-x-[4px] text-secondary font-normal md:text-normal text-small"
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="underline">
                            {demo.type === DEMO_TYPE.WEBSITE
                                ? "View on Website"
                                : "View Demo"}
                        </div>
                        <img
                            src={arrowUpRight}
                            alt="arrowUpRight"
                            className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
                        />
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectOverview;
