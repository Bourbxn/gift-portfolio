import { resume } from "../../constants/resume";
import { AboutMe } from "../../features/aboutMe";
import PageContainer from "../PageContainer";

function AboutMePage() {
  return (
    <PageContainer>
      <AboutMe resume={resume} />
    </PageContainer>
  );
}

export default AboutMePage;
