interface Props {
    name: string;
    desc: string;
    img: string;
}

function ProjectCard({ name, desc, img }: Props) {
    return (
        <div className="flex flex-col gap-[48px]">
            <img src={img} alt={name} />
            <div>
                <h3 className="text-h3 text-black font-bold">{name}</h3>
                <p className="text-normal text-black font-normal">{desc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
