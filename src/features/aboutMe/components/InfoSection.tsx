interface Props {
    fullName: string;
    desc: string[];
}

function InfoSection({ fullName, desc }: Props) {
    return (
        <div className="md:pt-0 pt-[24px]">
            <h2 className="font-bold md:text-h2 text-h3-proj-detail text-secondary md:pb-[24px] pb-[16px]">
                {fullName.toUpperCase()}
            </h2>
            {desc.map((p, index) => (
                <p
                    key={index}
                    className="font-normal text-description md:text-h3-proj-detail text-small"
                >
                    {p}
                </p>
            ))}
        </div>
    );
}

export default InfoSection;
