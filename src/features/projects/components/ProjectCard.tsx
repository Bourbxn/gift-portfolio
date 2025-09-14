import { useNavigate } from "react-router-dom";
import slugify from "slugify";

interface Props {
    name: string;
    desc: string;
    img: string;
}

function ProjectCard({ name, desc, img }: Props) {
    let navigate = useNavigate();
    return (
        <div
            className="flex flex-col gap-[28px] cursor-pointer"
            onClick={() => {
                navigate(`/projects/${slugify(name, { lower: true })}`);
            }}
        >
            <img src={img} alt={name} />
            <div>
                <h3 className="text-h3 text-black font-bold pb-[16px]">{name}</h3>
                <p className="text-normal text-black font-normal">{desc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
