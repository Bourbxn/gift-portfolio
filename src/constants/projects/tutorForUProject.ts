import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    tutorForU,
    tutorForU1,
    tutorForU2,
    tutorForU3,
    tutorForU4,
    tutorForU5,
    tutorForUSum,
} from "../../assets";

export const tutorForUProject: Project = {
    name: "Tutor for U",
    desc: "Website for discovering and enrolling in online courses by institutions, with the option for users to register as tutors and offer their own courses.",
    img: tutorForU,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}`,
    title: "Design",
    details: [
        {
            title: "Home Page",
            imgSets: [
                [
                    {
                        img: tutorForUSum,
                    },
                ],
            ],
        },
        {
            title: "User Flow",
            imgSets: [
                [
                    {
                        img: tutorForU1,
                    },
                ],
                [
                    {
                        img: tutorForU2,
                    },
                ],
                [
                    {
                        img: tutorForU3,
                    },
                ],
                [
                    {
                        img: tutorForU4,
                    },
                ],
                [
                    {
                        img: tutorForU5,
                    },
                ],
            ],
        },
    ],
};
