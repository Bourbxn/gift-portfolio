import { circleYellowCloudedFull, profile } from "../../assets";
import type { Resume } from "../../types/resume";
import AwardSection from "./components/AwardSection";
import EduSection from "./components/EduSection";
import InfoSection from "./components/InfoSection";
import WorkExpSection from "./components/WorkExpSection";

interface Props {
    resume: Resume;
}

function AboutMe({ resume }: Props) {
    const { fullName, desc, education, workExperiences, awards } = resume;
    return (
        <div className="relative">
            <div className="flex md:flex-row flex-col gap-x-[64px] md:pb-0 pb-[32px] ">
                <img
                    src={profile}
                    alt="profile"
                    className="md:w-[300px] md:h-[300px] h-[64px] w-[64px]"
                />
                <div className="md:space-y-[40px] space-y-[24px]">
                    <InfoSection fullName={fullName} desc={desc} />
                    <EduSection education={education} />
                    <WorkExpSection workExperiences={workExperiences} />
                    <AwardSection awards={awards} />
                </div>
            </div>
            <img
                src={circleYellowCloudedFull}
                className="md:block hidden w-[694.09px] h-[694.09px] absolute top-[-320px] right-[-420px] z-[-10]"
            />
            <img
                src={circleYellowCloudedFull}
                className="md:block hidden w-[694.09px] h-[694.09px] absolute bottom-[20px] left-[-400px] z-[-10]"
            />
        </div>
    );
}

export default AboutMe;
