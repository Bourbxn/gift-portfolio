import { useNavigate } from "react-router-dom";
import { portrait, circleYellowCloudedFull } from "../../assets";
import { RoundedButton, RoundedTag } from "../../components";

function Introduce() {
    const navigate = useNavigate();
    return (
        <div className="w-screen md:h-screen flex md:flex-row flex-col justify-between items-center md:pl-[108px] pl-[16px] pr-[16px] md:pr-0 relative">
            <div className="md:w-[664px]">
                <h1 className="font-semibold md:text-h1 text-large text-secondary">
                    Hello!
                </h1>
                <h1 className="font-semibold md:text-h1 text-large text-secondary">
                    I’m Gift
                </h1>
                <p className="text-black md:text-h3-proj-detail text-extra-small font-normal">
                    I’m a UX/UI Designer passionate about crafting intuitive and practical
                    user experiences. From user research to prototyping, I love turning
                    ideas into impactful designs — and I never stop learning to stay ahead
                    of trends.
                </p>
                <div className="w-fit md:pt-[32px] pt-[16px]">
                    <RoundedButton
                        title="About Me"
                        onClick={() => {
                            navigate("/about-me");
                        }}
                    />
                </div>
            </div>
            <div className="relative md:block hidden">
                <img src={portrait} alt="portrait" className="w-[711px] h-[711px]" />
                <img
                    src={circleYellowCloudedFull}
                    alt="circleYellowClouded"
                    className="absolute top-0 z-[-10] w-[771px] h-[771px]"
                />
                <RoundedTag
                    title="UX/UI Designer"
                    className="top-[160px] left-[70px] absolute z-[-10]"
                />
                <RoundedTag
                    title="Computer Engineer"
                    className="bottom-[-20px] right-[130px] absolute "
                />
            </div>
            <img
                src={circleYellowCloudedFull}
                alt="circleYellowClouded"
                className="absolute z-[-10] md:w-[773px] md:h-[773px] w-[400px] h-[400px] md:left-[-315px] md:top-[-451px] left-[-83px] top-[-100px]"
            />
        </div>
    );
}

export default Introduce;
