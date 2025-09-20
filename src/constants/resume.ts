import type { Resume } from "../types/resume";

export const resume: Resume = {
    fullName: "Siriyakorn Achasewin",
    desc: [
        "Hi, I’m Gift. I’m a UX/UI Designer passionate about crafting intuitive, user-friendly, and visually engaging experiences.",
        "I enjoy the entire design journey, from user research to prototyping and interface development, turning ideas into meaningful solutions. With diverse experience and a strong commitment to continuous learning, I strive to stay ahead of trends and create designs that truly connect with users.",
    ],
    education: {
        institution: {
            name: "King Mongkut's Institute of Technology Ladkrabang",
            shortName: "KMITL",
        },
        degree: "Bachelor of computer engineering, Faculty of engineering ",
        dateStart: "Aug 2021",
        dateEnd: "Apr 2025",
    },
    workExperiences: [
        {
            position: "Junior UX/UI Designer",
            company: "TMBThanachart Bank (ttb)",
            dateStart: "Jun 2025",
            dateEnd: "Present",
            works: [
                "Designed and improved app flows, including the development of a common payment system, reducing user confusion.",
                "Created in-app tutorials for the ttb touch app and published them on the official website to support user onboarding and learning.",
                "Designed slips to make digital banking more intuitive and engaging.",
                "Produced App Store preview assets for each release to promote the app effectively.",
                "Developed the WOW points redemption feature, enabling users to apply rewards as discounts.",
                "Designed illustrations and visual assets for the mobile app, website, and internal staff tablets.",
                "Led the redesign of the bank’s character illustrations, modernizing brand identity and improving customer engagement.",
            ],
        },
        {
            position: "Internship (UX/UI Designer)",
            company: "TMBThanachart Bank (ttb)",
            dateStart: "Aug 2024",
            dateEnd: "May 2025",
            works: [
                "Collaborated with the team to design and improve various features of the ttb touch mobile application.",
                "Conducted user research, usability testing, and prototyping to enhance user experience across multiple app releases.",
                "Engaged in diverse projects aimed at improving usability and customer satisfaction.",
            ],
        },
        {
            position: "Internship (UX/UI Designer)",
            company: "Innovative Extremist",
            dateStart: "Apr 2024",
            dateEnd: "Jun 2024",
            works: [
                "Conducted user research to support the design of a CMS platform for content creators to upload and sell video lessons.",
                "Designed both the backend CMS and frontend learning platform for users.",
                "Created prototypes, performed usability testing, and presented design outcomes.",
            ],
        },
    ],
    awards: [
        {
            contest: "Innovation for Crime Combating Contest 2023",
            works: [
                "Proposed and developed a solution for target vehicle route tracking.",
                "Implemented object detection and tracking using YOLOv8 and DeepSORT.",
            ],
        },
    ],
};
