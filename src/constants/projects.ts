import {
    characterTtb,
    commonPayment,
    dustSentry,
    playboard,
    redesignScb,
    slip,
    ttbFeatures,
    tutorForU,
    tutorial,
    wow,
    wowError,
    wowMainFlow,
    wowPrototype,
    wowUserTest1,
    wowUserTest2,
} from "../assets";

export interface Detail {
    title: string;
    desc: string;
    img: string[];
}

export interface Section {
    title: string;
    details: Detail[];
}

export interface Project {
    name: string;
    desc: string;
    img: string;
    role: string;
    responsibility: string;
    sections: Section[];
}

export const projects: Project[] = [
    {
        name: "WOW Points Redemption",
        desc: "A feature on the ttb touch app that enables users to redeem WOW points as instant discounts during payment, enhancing convenience and engagement.",
        img: wow,
        role: "UX/UI Designer",
        responsibility: "User Interface Design, Prototyping, Usability Testing",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Common Payment",
        desc: "Designed and improved app flows by developing a common payment system, reducing user confusion and streamlining the payment experience.",
        img: commonPayment,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Tutorial ttb touch",
        desc: "Created in-app tutorials for the ttb touch app and published them on the official website to support user onboarding and learning.",
        img: tutorial,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Custom Slip",
        desc: "Designed customizable digital slips to make banking more intuitive and engaging for users.",
        img: slip,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "UX/UI Feature Projects",
        desc: "Contributed to the design and development of various features on the ttb touch app, enhancing the overall user experience.",
        img: ttbFeatures,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Playboard",
        desc: "Designed a CMS and learning platform for content creators, including research, prototyping, and usability testing.",
        img: playboard,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Dust Sentry",
        desc: "Application for monitoring PM2.5, purchasing dust-protection products, and controlling smart home devices.",
        img: dustSentry,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Tutor for U",
        desc: "Website for discovering and enrolling in online courses by institutions, with the option for users to register as tutors and offer their own courses.",
        img: tutorForU,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Home Page Redesign",
        desc: "Redesigned the Home Page of the SCB app to enhance user experience and modernize the interface.",
        img: redesignScb,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Car Parking",
        desc: "Redesigned character illustrations for ttb and created squad-based visuals for each release, enhancing the brand identity and making in-app content more engaging and easy to understand.",
        img: characterTtb,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Redesign",
        desc: "Redesigned character illustrations for ttb and created squad-based visuals for each release, enhancing the brand identity and making in-app content more engaging and easy to understand.",
        img: characterTtb,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
    {
        name: "Visual Design",
        desc: "Redesigned character illustrations for ttb and created squad-based visuals for each release, enhancing the brand identity and making in-app content more engaging and easy to understand.",
        img: characterTtb,
        role: "role",
        responsibility: "responsibility",
        sections: [
            {
                title: "Design & Testing Process",
                details: [
                    {
                        title: "Main Flow",
                        desc: "the main flow that users actually follow, illustrating a smooth and intuitive points redemption journey, ensuring a seamless and straightforward experience",
                        img: [wowMainFlow],
                    },
                    {
                        title: "Error Handling:",
                        desc: "Within the redemption flow, error cases were designed to address potential user mistakes. Due to the complex rules, error handling helps users understand these limitations and minimize confusion.",
                        img: [wowError],
                    },
                    {
                        title: "Prototyping",
                        desc: "The Interactive Prototype simulated real conditions using variables like user points and redeemable amounts, allowing realistic usability testing.",
                        img: [wowPrototype],
                    },
                    {
                        title: "Usability Testing",
                        desc: "Usability testing with five users showed that all participants were able to successfully redeem WOW Points as discounts, confirming that the designed redemption flow is clear and functional.",
                        img: [wowUserTest1, wowUserTest2],
                    },
                ],
            },
        ],
    },
];
