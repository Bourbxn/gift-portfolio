import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    carParking,
    carParkingAddDetail1,
    carParkingAddDetail2,
    carParkingAdminWeb,
    carParkingCustomer1,
    carParkingCustomer2,
    carParkingTesting,
} from "../../assets";

export const carParkingProject: Project = {
    name: "Car Parking",
    desc: "Designed the UX/UI for both the customer interface (view parking rates, make online payments) and the admin interface (system configuration and management dashboard). The project aims to allow customers to conveniently check parking fees and pay directly through the website, reducing staff involvement and minimizing errors in manual fee calculations.",
    summary:
        "Designed the UX/UI for both user interface (view parking rates, make online payments) and admin interface (system configuration and management dashboard).",
    img: carParking,
    role: `${ROLE.UXUI_DESIGNER}, ${ROLE.FRONTEND_DEVELOPER}`,
    responsibility: `${RESPONSIBILITY.UXUI_DESIGN}, ${RESPONSIBILITY.FRONTEND_DEVELOPMENT}, ${RESPONSIBILITY.OCR_IMPLEMENTATION}`,
    title: "Design & Testing Process",
    details: [
        {
            title: "Customer Website",
            imgSets: [
                [
                    {
                        img: carParkingCustomer1,
                    },
                ],
                [
                    {
                        img: carParkingCustomer2,
                    },
                ],
            ],
        },
        {
            title: "Admin Website",
            imgSets: [
                [
                    {
                        img: carParkingAdminWeb,
                    },
                ],
            ],
        },
        {
            title: "Usability Testing",
            imgSets: [
                [
                    {
                        img: carParkingTesting,
                    },
                ],
            ],
        },
        {
            title: "Additional Details",
            desc: "This project was developed as a complete end-to-end solution, covering both hardware and software. It included training an AI model for license plate recognition, integrating with automated vehicle access control, and implementing parking fee management.",
            imgSets: [
                [
                    {
                        img: carParkingAddDetail1,
                    },
                ],
                [
                    {
                        img: carParkingAddDetail2,
                    },
                ],
            ],
        },
    ],
};
