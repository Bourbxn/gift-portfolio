import type { Detail } from "../../../types/projects";
import ImageSetsPreview from "./ImageSetsPreview";

interface Props {
    detail: Detail;
}

function SectionDetailCard({ detail }: Props) {
    const {
        title,
        desc,
        imgSets,
        subDetails,
        subDetailsNumber = true,
        fixedCols = false,
    } = detail;
    return (
        <div>
            <div className="md:pb-[24px] pb-[8px]">
                <h3
                    className={`md:text-h3-proj-detail text-normal-mb text-black font-bold ${desc ? "pb-[8px]" : ""} `}
                >
                    {title}:
                </h3>
                {desc && (
                    <p
                        className={`md:text-normal text-small text-description font-normal `}
                    >
                        {desc}
                    </p>
                )}
            </div>
            <div className="md:space-y-[24px] space-y-[16px]">
                {imgSets && !subDetails && (
                    <ImageSetsPreview imgSets={imgSets} fixedCols={fixedCols} />
                )}
                {!imgSets &&
                    subDetails &&
                    subDetails.map(({ title, imgSets, desc }, index) => (
                        <div key={index}>
                            <div className="md:pb-[16px] pb-[8px]">
                                <h3
                                    className={`font-bold text-description md:text-normal text-small ${subDetailsNumber ? "md:pl-[8px] pl-[4px] md:pb-[16px] pb-[8px]" : "md:pl-0 pl-0"}  ${desc ? "pb-[8px]" : ""}`}
                                >
                                    {subDetailsNumber ? `${index + 1}.` : ""} {title}
                                </h3>
                                {desc && (
                                    <p
                                        className={`md:text-normal text-small text-description font-normal `}
                                    >
                                        {desc}
                                    </p>
                                )}
                            </div>
                            <ImageSetsPreview imgSets={imgSets} fixedCols={fixedCols} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default SectionDetailCard;
