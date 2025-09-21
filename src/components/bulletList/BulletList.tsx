interface Props {
    msg: string;
    line?: boolean;
}

function BulletList({ msg, line = false }: Props) {
    return (
        <div
            className={`flex items-start md:gap-[12px] gap-[6px] ${line ? "md:pl-[28px] pl-[24px]" : "md:pl-[12px] pl-[6px]"} `}
        >
            <span className="text-description text-sm md:mt-1 mt-0">•</span>
            <span className="text-description md:text-normal text-small leading-relaxed">
                {msg}
            </span>
        </div>
    );
}

export default BulletList;
