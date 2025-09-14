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
            <h2 className="text-h2 text-secondary font-bold pb-[24px]">{name}</h2>
            <div className="grid grid-cols-2 gap-[40px]">
                <div>
                    <h3 className="text-h3 text-black font-bold">Project Overview:</h3>
                    <p className="text-normal text-description font-normal">{desc}</p>
                </div>
                <div>
                    <div>
                        <h3 className="text-h3 text-black font-bold">Role:</h3>
                        <p className="text-normal text-description font-normal">{role}</p>
                    </div>
                    <div>
                        <h3 className="text-h3 text-black font-bold">Responsibility:</h3>
                        <p className="text-normal text-description font-normal">
                            {responsibility}
                        </p>
                    </div>
                </div>
            </div>
            <img src={img} alt="name" className="py-[44px]" />
        </div>
    );
}

export default ProjectOverview;
