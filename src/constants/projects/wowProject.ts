import {
    wow,
    wowError,
    wowMainFlow,
    wowPrototype,
    wowUserTest1,
    wowUserTest2,
} from "../../assets";
import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

export const wowProject: Project = {
    name: "WOW Points Redemption",
    summary:
        "A feature on the ttb touch app that enables users to redeem WOW points as instant discounts during payment, enhancing convenience and engagement.",
    desc: "A feature on the ttb touch app designed to enhance the user experience by allowing customers to redeem WOW Points as instant discounts during payment, making the process simpler and more rewarding.",
    img: wow,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.PROTOTYPING}, ${RESPONSIBILITY.USABILITY_TESTING}`,
    title: "Design & Testing Process",
    details: [
        {
            title: "Main Flow",
            desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
            imgSets: [
                [
                    {
                        img: wowMainFlow,
                    },
                ],
            ],
        },
        {
            title: "Error Handling",
            desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
            imgSets: [
                [
                    {
                        img: wowError,
                    },
                ],
            ],
        },
        {
            title: "Prototyping",
            desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
            imgSets: [
                [
                    {
                        img: wowPrototype,
                    },
                ],
            ],
        },
        {
            title: "Usability Testing",
            desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
            imgSets: [
                [
                    {
                        img: wowUserTest1,
                    },
                    {
                        img: wowUserTest2,
                    },
                ],
            ],
        },
    ],
};
