import type { Education } from "../../../types/resume";
import SectionHeader from "./SectionHeader";

interface Props {
    education: Education;
}

function EduSection({ education }: Props) {
    const { institution, degree, dateStart, dateEnd } = education;
    return (
        <div>
            <SectionHeader msg="Education" />
            <div className="pb-[8px]">
                <h3 className="md:text-h3-proj-detail text-small font-bold text-description">
                    {institution.name} ({institution.shortName})
                </h3>
                <h3 className="md:text-h3-proj-detail text-small font-bold text-description">
                    {degree}
                </h3>
            </div>
            <p className="text-description font-normal md:text-normal text-extra-small">
                {dateStart} - {dateEnd}
            </p>
        </div>
    );
}

export default EduSection;
