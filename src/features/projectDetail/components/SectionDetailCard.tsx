import type { Detail } from "../../../constants/projects";

interface Props {
    detail: Detail;
}

function SectionDetailCard({ detail }: Props) {
    const { title, desc, img } = detail;
    return (
        <div>
            <h3 className="text-h3-proj-detail text-black font-bold pb-[8px]">
                {title}:
            </h3>
            <p className="text-normal text-description font-normal pb-[24px]">
                {desc}
            </p>
            <div
                className={`grid ${img.length > 1 ? "grid-cols-2 gap-x-[24px]" : "grid-cols-1"} `}
            >
                {img.map((img, key) => (
                    <img src={img} key={key} className="w-fit" />
                ))}
            </div>
        </div>
    );
}

export default SectionDetailCard;
