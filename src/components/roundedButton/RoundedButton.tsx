type Size = "lg" | "md";

interface Props {
    size?: Size;
    title: string;
    icon?: string;
    onClick?: () => void;
}

function RoundedButton({ size = "md", title, icon, onClick }: Props) {
    const getSytlesBySize = () => {
        const defaultStyles = "px-[24px] py-[12px] text-normal";
        switch (size) {
            case "md":
                return defaultStyles;
            case "lg":
                return "px-[32px] py-[16px] text-large";
            default:
                return defaultStyles;
        }
    };

    return (
        <button
            className={`bg-secondary w-fit text-white rounded-full font-bold shadow-md  ${getSytlesBySize()} flex items-center gap-x-[12px] cursor-pointer`}
            onClick={onClick}
        >
            <div>{title}</div>
            {icon && <img src={icon} alt={title} />}
        </button>
    );
}

export default RoundedButton;
