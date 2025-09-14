interface Props {
    title: string;
    className?: string;
}

function RoundedTag({ title, className }: Props) {
    return (
        <div
            className={`bg-tertiary text-black text-normal font-normal px-[24px] py-[16px] rounded-full w-fit ${className}`}
        >
            {title}
        </div>
    );
}

export default RoundedTag;
