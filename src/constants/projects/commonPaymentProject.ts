import {
    commonPayment,
    cpPrototype,
    cpResearch1,
    cpResearch2,
    cpBillPayDesign,
    cpBillPayMainFlow,
    cpProductAndLoanPurchaseDesign,
    cpProductAndLoanPurchaseMainFlow,
    cpTopUpDesign,
    cpTopUpMainFlow,
    cpUserTest1,
    cpUserTest2,
    cpUserTest3,
    cpUserTest4,
    cpUserTest5,
    cpUserTest6,
} from "../../assets";
import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

export const commonPaymentProject: Project = {
    name: "Common Payment",
    desc: "This project focused on designing and improving app flows by developing a common payment system. The goal was to unify the payment experience across different services, reduce user confusion, and streamline the overall payment process.",
    summary:
        "Designed and improved app flows by developing a common payment system, reducing user confusion and streamlining the payment experience.",
    img: commonPayment,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.PROTOTYPING}, ${RESPONSIBILITY.USABILITY_TESTING}`,
    title: "Design & Testing Process",
    details: [
        {
            title: "Research & Competitive Analysis",
            desc: "Conducted research and competitive analysis to identify user pain points and best practices, guiding a design direction that ensured simplicity and consistency across the app’s services.",
            imgSets: [
                [
                    {
                        img: cpResearch1,
                    },
                    {
                        img: cpResearch2,
                    },
                ],
            ],
        },
        {
            title: "Design Process",
            desc: "The Common Payment system was applied across key transaction flows in the app",
            subDetails: [
                {
                    title: "Product and loan purchase.",
                    imgSets: [
                        [
                            {
                                title: "Design",
                                img: cpProductAndLoanPurchaseDesign,
                            },
                            {
                                colSpan: 3,
                                title: "Main Flow (Health Insurance Purchase)",
                                img: cpProductAndLoanPurchaseMainFlow,
                            },
                        ],
                    ],
                },
                {
                    title: "Bill payment",
                    imgSets: [
                        [
                            {
                                title: "Design",
                                img: cpBillPayDesign,
                            },
                            {
                                title: "Main Flow",
                                img: cpBillPayMainFlow,
                            },
                        ],
                    ],
                },
                {
                    title: "Top-up",
                    imgSets: [
                        [
                            {
                                title: "Design",
                                img: cpTopUpDesign,
                            },
                            {
                                title: "Main Flow",
                                img: cpTopUpMainFlow,
                            },
                        ],
                    ],
                },
            ],
        },
        {
            title: "Prototyping",
            imgSets: [
                [
                    {
                        img: cpPrototype,
                    },
                ],
            ],
        },
        {
            title: "Usability Testing",
            desc: "This project involved multiple rounds of user testing, with each iteration designed to gather insights and refine the design, ensuring the final outcome best met user needs.",
            imgSets: [
                [
                    {
                        img: cpUserTest1,
                    },
                    {
                        img: cpUserTest2,
                    },
                    {
                        img: cpUserTest3,
                    },
                ],
                [
                    {
                        img: cpUserTest4,
                    },
                    {
                        img: cpUserTest5,
                    },
                    {
                        img: cpUserTest6,
                    },
                ],
            ],
        },
    ],
};
