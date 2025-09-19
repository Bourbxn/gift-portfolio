import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    visualDesign,
    iuaCompetitiveAnalysis,
    iuaConcept,
    iuaCurrentStateAnalysis,
    iuaIllustrationForInbox,
    iuaOtherAssets,
    iuaProductInsurance,
    iuaSpotIcon,
} from "../../assets";

export const illustrationUiProject: Project = {
    name: "Illustration & UI Assets",
    desc: "Created illustrations to support in-app content and branding, enhancing the user experience. The project also included redesigning the bank’s character for ttb, providing a fresh and consistent visual identity across the app and other bank materials.",
    img: visualDesign,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.VISUAL_DESIGN}, ${RESPONSIBILITY.ILLUSTRATION}, ${RESPONSIBILITY.UI_ENHANCEMENT}`,
    title: "Projects",
    details: [
        {
            title: "Character Redesign",
            desc: "Redesigned the ttb bank’s character to be more modern and enhance its distinct identity.",
            subDetailsNumber: false,
            subDetails: [
                {
                    title: "Current State Analysis",
                    imgSets: [
                        [
                            {
                                img: iuaCurrentStateAnalysis,
                            },
                        ],
                    ],
                },
                {
                    title: "Competitive Analysis",
                    imgSets: [
                        [
                            {
                                img: iuaCompetitiveAnalysis,
                            },
                        ],
                    ],
                },
                {
                    title: "Concept & Explorations",
                    imgSets: [
                        [
                            {
                                img: iuaConcept,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            title: "Image Product Insurance on Product Card",
            desc: "Created cutout images related to insurance products for use on product cards across the app.",
            imgSets: [
                [
                    {
                        img: iuaProductInsurance,
                    },
                ],
            ],
        },
        {
            title: "Spot/Icon",
            desc: "Designed spots/icons for different teams in ttb Spark to use across their projects.",
            imgSets: [
                [
                    {
                        img: iuaSpotIcon,
                    },
                ],
            ],
        },
        {
            title: "Illustration for Inbox",
            desc: "Created illustrations to display in the inbox section of the ttb touch app.",
            imgSets: [
                [
                    {
                        img: iuaIllustrationForInbox,
                    },
                ],
            ],
        },
        {
            title: "Other Assets (Non-Production)",
            desc: "Produced assets to support mockups for app and tablet screens used by staff.",
            imgSets: [
                [
                    {
                        img: iuaOtherAssets,
                    },
                ],
            ],
        },
    ],
};
