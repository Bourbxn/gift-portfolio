interface Props {
    msg: string;
}

function SectionHeader({ msg }: Props) {
    return (
        <div className="font-normal md:text-normal text-extra-small text-secondary md:pb-[16px] pb-[8px]">
            {msg}
        </div>
    );
}

export default SectionHeader;
