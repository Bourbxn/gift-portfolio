import { useNavigate } from "react-router-dom";
import { banner, arrowRight, circleYellowClouded } from "../../assets";
import { RoundedButton } from "../../components";

function Banner() {
    let navigate = useNavigate();
    return (
        <>
            <div className="w-screen md:h-screen md:py-[0px] py-[48px] flex justify-center items-center md:px-[114px] px-[16px]">
                <div className="flex flex-col gap-y-[56px]">
                    <img src={banner} alt="banner" />
                    <div className="w-full flex justify-center">
                        <RoundedButton
                            size="lg"
                            title="View Projects"
                            icon={arrowRight}
                            onClick={() => {
                                navigate("/projects");
                                scrollTo({ top: 0 });
                            }}
                        />
                    </div>
                </div>
            </div>
            <img
                src={circleYellowClouded}
                alt="circleYellowClouded"
                className="md:w-[683px] md:h-[683px] w-[330px] h-[330px] absolute md:top-0 top-[66px] right-0 z-[-1000]"
            />
        </>
    );
}

export default Banner;
