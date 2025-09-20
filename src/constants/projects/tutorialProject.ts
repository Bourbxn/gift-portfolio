import {
    tutorial,
    tuteInApp,
    tuteOnWebSite1,
    tuteOnWebSite2,
    tuteOnWebSite3,
} from "../../assets";

import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

export const tutorialProject: Project = {
    name: "Tutorial ttb touch",
    summary:
        "Created in-app tutorials for the ttb touch app and published them on the official website to support user onboarding and learning.",
    desc: "Created tutorials for the ttb touch app and published them on the ttb bank website to help users learn how to use the app more easily and reduce the workload of Call Center staff, who can send step-by-step instructions directly to customers via in app notifications.",
    img: tutorial,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}`,
    title: "Design",
    details: [
        {
            title: "Tutorial screens on website",
            imgSets: [
                [
                    {
                        img: tuteOnWebSite1,
                    },
                    {
                        img: tuteOnWebSite2,
                    },
                    {
                        img: tuteOnWebSite3,
                    },
                ],
            ],
        },
        {
            title: "Tutorial screens in app",
            imgSets: [
                [
                    {
                        img: tuteInApp,
                    },
                ],
            ],
        },
    ],
};
