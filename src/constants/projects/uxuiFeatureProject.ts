import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    ttbFeatures,
    uxuiFeatAlertMessage,
    uxuiFeatAllFreeCoBrand,
    uxuiFeatBenchmark,
    uxuiFeatColdStart,
    uxuiFeatInvestment,
    uxuiFeatPreviewApp,
    uxuiFeatQrPayment,
    uxuiFeatUxResearch,
} from "../../assets";

export const uxuiFeatureProject: Project = {
    name: "UX/UI Feature Projects",
    desc: "Contributed to the design and development of various features on the ttb touch app, enhancing the overall user experience.",
    img: ttbFeatures,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.PROTOTYPING}, ${RESPONSIBILITY.USABILITY_TESTING}`,
    title: "Projects",
    splitCols: true,
    details: [
        {
            title: "Benchmark",
            desc: "Designed app themes for TTB Touch, including creating a Disney-inspired theme for the Home screen.",
            imgSets: [
                [
                    {
                        img: uxuiFeatBenchmark,
                    },
                ],
            ],
        },
        {
            title: "QR Payment (B scan C)",
            desc: "Developed the QR Payment feature to support payments at 7-Eleven stores through the banking app.",
            imgSets: [
                [
                    {
                        img: uxuiFeatQrPayment,
                    },
                ],
            ],
        },
        {
            title: "Alert Message",
            desc: "Designed an alert system for detecting fraudulent accounts, displaying warning messages based on risk levels such as suspicious or high-risk accounts.",
            imgSets: [
                [
                    {
                        img: uxuiFeatAlertMessage,
                    },
                ],
            ],
        },
        {
            title: "All Free Co-branded Debit Cards",
            desc: "Designed application screens for All Free co-branded debit cards bundled with accident protection for both adults and kids.",
            imgSets: [
                [
                    {
                        img: uxuiFeatAllFreeCoBrand,
                    },
                ],
            ],
        },
        {
            title: "Preview App",
            desc: "Created a Preview App to be published on the App Store and Play Store with each release update featuring new functions.",
            imgSets: [
                [
                    {
                        img: uxuiFeatPreviewApp,
                    },
                ],
            ],
        },
        {
            title: "Cold Start",
            desc: "Designed the Cold Start experience, enabling users to select a personalized style when first using the TTB Touch app.",
            imgSets: [
                [
                    {
                        img: uxuiFeatColdStart,
                    },
                ],
            ],
        },
        {
            title: "Investment Project",
            desc: "Designed the Investment Hub to showcase diverse investment options, supported by competitive analysis to inform the design decisions.",
            imgSets: [
                [
                    {
                        img: uxuiFeatInvestment,
                    },
                ],
            ],
        },
        {
            title: "UX Research",
            desc: "Assisted in conducting usability testing for different teams and applied the results to improve screen design and user experience.",
            imgSets: [
                [
                    {
                        img: uxuiFeatUxResearch,
                    },
                ],
            ],
        },
    ],
};
