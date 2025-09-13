import { portrait, circleYellowCloudedFull } from "../../assets";
import { RoundedButton, RoundedTag } from "../../components";

function Introduce() {
    return (
        <div className="w-screen h-screen flex justify-between items-center pl-[108px] relative">
            <div className="w-[664px]">
                <h1 className="font-semibold text-h1 text-secondary">Hello!</h1>
                <h1 className="font-semibold text-h1 text-secondary">I’m Gift</h1>
                <p className="text-black text-normal font-normal">
                    I’m a UX/UI Designer passionate about crafting intuitive
                </p>
                <p className="text-black text-normal font-normal">
                    and practical user experiences.
                </p>
                <p className="text-black text-normal font-normal">
                    From user research to prototyping, I love turning ideas into
                </p>
                <p className="text-black text-normal font-normal">
                    impactful designs — and I never stop learning to stay
                </p>
                <p className="text-black text-normal font-normal">ahead of trends.</p>
                <div className="w-fit pt-[32px]">
                    <RoundedButton title="About Me" />
                </div>
            </div>
            <div className="relative">
                <img src={portrait} alt="portrait" className="w-[711px] h-[711px]" />
                <img
                    src={circleYellowCloudedFull}
                    alt="circleYellowClouded"
                    className="absolute top-0 z-[-10] w-[771px] h-[771px]"
                />
                <RoundedTag
                    title="UX/UI Designer"
                    className="top-[160px] left-[100px] absolute z-[-10]"
                />
                <RoundedTag
                    title="Computer Engineer"
                    className="bottom-[-20px] right-[130px] absolute "
                />
            </div>
            <img
                src={circleYellowCloudedFull}
                alt="circleYellowClouded"
                className="absolute z-[-10] w-[773px] h-[773px] left-[-315px] top-[-451px]"
            />
        </div>
    );
}

export default Introduce;
