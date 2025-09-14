type Size = "lg" | "md";

interface Props {
    size?: Size;
    title: string;
    icon?: string;
    onClick?: () => void;
}

function RoundedButton({ size = "md", title, icon, onClick }: Props) {
    const getSytlesBySize = () => {
        const defaultStyles = "md:px-[24px] md:py-[12px] px-[16px] py-[8px]";
        switch (size) {
            case "md":
                return defaultStyles;
            case "lg":
                return "md:px-[32px] md:py-[16px] px-[16px] py-[8px]";
            default:
                return defaultStyles;
        }
    };

    const getTextSizeBySize = () => {
        const defaultTextSize = "md:text-normal text-small";
        switch (size) {
            case "md":
                return defaultTextSize;
            case "lg":
                return "md:text-h3-proj-detail text-normal-mb";
        }
    };

    return (
        <button
            className={`bg-secondary w-fit text-white rounded-full font-bold shadow-md  ${getSytlesBySize()} flex items-center gap-x-[12px] cursor-pointer`}
            onClick={onClick}
        >
            <div className={`${getTextSizeBySize()}`}>{title}</div>
            {icon && (
                <img
                    src={icon}
                    alt={title}
                    className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                />
            )}
        </button>
    );
}

export default RoundedButton;
