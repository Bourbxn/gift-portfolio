import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    redesignScb,
    hprCurrentScb,
    hprDesignSystem,
    hprMySolution1,
    hprMySolution2,
    hprMySolution3,
    hprUserInterview1,
    hprUserInterview2,
    hprUserPersona,
    hprUserResearch,
    hprTesting,
} from "../../assets";

export const homePageRedesignProject: Project = {
    name: "Home Page Redesign",
    desc: "Redesigned the Home Page of the SCB app as a personal assignment to enhance user experience and modernize the interface. (This project was a personal exploration and not an official redesign for SCB.)",
    img: redesignScb,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.PROTOTYPING}, ${RESPONSIBILITY.USABILITY_TESTING}`,
    title: "Design & Testing Process",
    details: [
        {
            title: "User Research",
            desc: "Reviews from Play Store, App Store, and Pantip showed issues like app crashes and PIN input, which were not directly relevant to the home screen redesign, so further interviews were conducted. A quick benchmark of other banking apps revealed that they provide faster access to core functions and a cleaner, more modern interface, highlighting opportunities for SCB Easy’s improvement.",
            imgSets: [
                [
                    {
                        img: hprUserResearch,
                    },
                ],
            ],
        },
        {
            title: "User Interviews",
            imgSets: [
                [
                    {
                        img: hprUserInterview1,
                    },
                ],
                [
                    {
                        img: hprUserInterview2,
                    },
                ],
            ],
        },
        {
            title: "User Persona & User Empathy Map",
            imgSets: [
                [
                    {
                        img: hprUserPersona,
                    },
                ],
            ],
        },
        {
            title: "Current SCB Easy App",
            imgSets: [
                [
                    {
                        img: hprCurrentScb,
                    },
                ],
            ],
        },
        {
            title: "Design System",
            imgSets: [
                [
                    {
                        img: hprDesignSystem,
                    },
                ],
            ],
        },
        {
            title: "My Solution",
            imgSets: [
                [
                    {
                        img: hprMySolution1,
                    },
                ],
                [
                    {
                        img: hprMySolution2,
                    },
                ],
                [
                    {
                        img: hprMySolution3,
                    },
                ],
            ],
        },
        {
            title: "Usability Testing",
            imgSets: [
                [
                    {
                        img: hprTesting,
                    },
                ],
            ],
        },
    ],
};
