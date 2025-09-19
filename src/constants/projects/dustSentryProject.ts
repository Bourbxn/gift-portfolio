import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    dustSentry,
    dstECommerce,
    dstMonitoring,
    dstPersonaSitemap,
    dstScope,
    dstSmartHome,
    dstUserInterview,
    dstUserJourney,
    dstUserStoryMap,
} from "../../assets";

export const dustSentryProject: Project = {
    name: "Dust Sentry",
    desc: "Designed a mobile application that provides real-time PM2.5 monitoring, enables users to purchase dust-protection products, and integrates smart home control to improve indoor air quality. Responsibilities included UX/UI design, prototyping, and usability testing.",
    img: dustSentry,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.PROTOTYPING}, ${RESPONSIBILITY.USABILITY_TESTING}`,
    title: "Design & Testing Process",
    details: [
        {
            title: "Scoping the Topic",
            desc: "The goal of the Dust Sentry project is to provide users with real-time PM2.5 monitoring for their desired locations, offer guidance on dust prevention, enable the purchase of protective products, and allow control of smart home devices, all with the aim of encouraging users to care for their own health and that of their families.",
            imgSets: [
                [
                    {
                        img: dstScope,
                    },
                ],
            ],
        },
        {
            title: "User Interview",
            imgSets: [
                [
                    {
                        img: dstUserInterview,
                    },
                ],
            ],
        },
        {
            title: "Persona & Sitemap",
            imgSets: [
                [
                    {
                        img: dstPersonaSitemap,
                    },
                ],
            ],
        },
        {
            title: "User Story Mapping",
            imgSets: [
                [
                    {
                        img: dstUserStoryMap,
                    },
                ],
            ],
        },
        {
            title: "User Journey",
            imgSets: [
                [
                    {
                        img: dstUserJourney,
                    },
                ],
            ],
        },
        {
            title: "App Features",
            subDetails: [
                {
                    title: "Monitoring",
                    desc: "Real-time PM2.5 tracking with personalized location data.",
                    imgSets: [
                        [
                            {
                                img: dstMonitoring,
                            },
                        ],
                    ],
                },
                {
                    title: "E-commerce",
                    desc: "Dust-protection product recommendations and direct purchasing.",
                    imgSets: [
                        [
                            {
                                img: dstECommerce,
                            },
                        ],
                    ],
                },
                {
                    title: "Smart Home Control",
                    desc: "Remote control of air purifiers and related devices.",
                    imgSets: [
                        [
                            {
                                img: dstSmartHome,
                            },
                        ],
                    ],
                },
            ],
        },
    ],
};
