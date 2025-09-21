import type { Project } from "../../types/projects";
import { DEMO_TYPE, RESPONSIBILITY, ROLE } from "../constants";

import { playboard, playboardCms, playboardLearing } from "../../assets";

export const playboardProject: Project = {
    name: "Playboard",
    summary:
        "Designed a CMS and learning platform for content creators, including research, prototyping, and usability testing.",
    desc: "Designed a CMS and learning platform for content creators on Playboard, enabling them to upload and manage teaching content. The platform also provides learners with an intuitive interface to explore and enroll in courses.",
    img: playboard,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.PROTOTYPING}, ${RESPONSIBILITY.USABILITY_TESTING}`,
    title: "Design",
    demo: {
        url: "https://www.playboard-uat.arkcube.com/",
        type: DEMO_TYPE.WEBSITE,
    },
    details: [
        {
            title: "CMS (Creator)",
            imgSets: [
                [
                    {
                        img: playboardCms,
                    },
                ],
            ],
        },
        {
            title: "Learning Platform (Learner)",
            imgSets: [
                [
                    {
                        img: playboardLearing,
                    },
                ],
            ],
        },
    ],
};
