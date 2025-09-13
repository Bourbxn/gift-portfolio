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
} from "../assets";

export interface Project {
    name: string;
    desc: string;
    img: string;
}

export const projects: Project[] = [
    {
        name: "WOW Points Redemption",
        desc: "A feature on the ttb touch app that enables users to redeem WOW points as instant discounts during payment, enhancing convenience and engagement.",
        img: wow,
    },
    {
        name: "Common Payment",
        desc: "Designed and improved app flows by developing a common payment system, reducing user confusion and streamlining the payment experience.",
        img: commonPayment,
    },
    {
        name: "Tutorial ttb touch",
        desc: "Created in-app tutorials for the ttb touch app and published them on the official website to support user onboarding and learning.",
        img: tutorial,
    },
    {
        name: "Custom Slip",
        desc: "Designed customizable digital slips to make banking more intuitive and engaging for users.",
        img: slip,
    },
    {
        name: "UX/UI Feature Projects",
        desc: "Contributed to the design and development of various features on the ttb touch app, enhancing the overall user experience.",
        img: ttbFeatures,
    },
    {
        name: "Playboard",
        desc: "Designed a CMS and learning platform for content creators, including research, prototyping, and usability testing.",
        img: playboard,
    },
    {
        name: "Dust Sentry",
        desc: "Application for monitoring PM2.5, purchasing dust-protection products, and controlling smart home devices.",
        img: dustSentry,
    },
    {
        name: "Tutor for U",
        desc: "Website for discovering and enrolling in online courses by institutions, with the option for users to register as tutors and offer their own courses.",
        img: tutorForU,
    },
    {
        name: "Home Page Redesign",
        desc: "Redesigned the Home Page of the SCB app to enhance user experience and modernize the interface.",
        img: redesignScb,
    },
    {
        name: "Car Parking",
        desc: "Redesigned character illustrations for ttb and created squad-based visuals for each release, enhancing the brand identity and making in-app content more engaging and easy to understand.",
        img: characterTtb,
    },
    {
        name: "Redesign",
        desc: "Redesigned character illustrations for ttb and created squad-based visuals for each release, enhancing the brand identity and making in-app content more engaging and easy to understand.",
        img: characterTtb,
    },
    {
        name: "Visual Design",
        desc: "Redesigned character illustrations for ttb and created squad-based visuals for each release, enhancing the brand identity and making in-app content more engaging and easy to understand.",
        img: characterTtb,
    },
];
