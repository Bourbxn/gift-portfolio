interface Props {
    name: string;
    desc: string;
    role: string;
    responsibility: string;
    img: string;
}

function ProjectOverview({ name, desc, role, responsibility, img }: Props) {
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
        </div>
    );
}

export default ProjectOverview;
