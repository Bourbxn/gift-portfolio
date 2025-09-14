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
            className="flex flex-col md:gap-[28px] gap-[16px] cursor-pointer"
            onClick={() => {
                navigate(`/projects/${slugify(name, { lower: true })}`);
            }}
        >
            <img src={img} alt={name} />
            <div>
                <h3 className="md:text-h3 text-normal-mb text-black font-bold md:pb-[16px] pb-[8px]">
                    {name}
                </h3>
                <p className="md:text-normal text-small text-description font-normal">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;
