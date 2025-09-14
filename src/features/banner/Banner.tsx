import { useNavigate } from "react-router-dom";
import { banner, arrowRight, circleYellowClouded } from "../../assets";
import { RoundedButton } from "../../components";

function Banner() {
    let navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center px-[114px]">
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
                className="w-[683px] h-[683px] absolute top-0 right-0 z-[-1000]"
            />
        </>
    );
}

export default Banner;
