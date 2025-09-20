import type { Project } from "../../types/projects";
import { RESPONSIBILITY, ROLE } from "../constants";

import {
    slip,
    slipDisney1,
    slipDisney2,
    slipDisney3,
    slipDisney4,
    slipDisney5,
    slipEcoFood1,
    slipEcoFood2,
    slipEcoFood3,
    slipEcoFood4,
    slipEcoFood5,
    slipFestive1,
    slipFestive2,
    slipFestive3,
    slipFestive4,
    slipFestive5,
    slipOther1,
    slipOther2,
    slipOther3,
    slipOther4,
    slipOther5,
} from "../../assets";

export const slipProject: Project = {
    name: "Custom Slip",
    summary:
        "Designed customizable digital slips to make banking more intuitive and engaging for users.",
    desc: "Designed customizable digital transaction slips to make banking more intuitive and engaging. The goal was to create visually appealing and personalized slips that enhance user satisfaction and bring more delight into the everyday banking experience.",
    img: slip,
    role: ROLE.UXUI_DESIGNER,
    responsibility: `${RESPONSIBILITY.VISUAL_DESIGN}, ${RESPONSIBILITY.ILLUSTRATION}, ${RESPONSIBILITY.UI_ENHANCEMENT}`,
    title: "Slip design",
    details: [
        {
            title: "Disney slip",
            fixedCols: true,
            imgSets: [
                [
                    {
                        img: slipDisney1,
                    },
                    {
                        img: slipDisney2,
                    },
                    {
                        img: slipDisney3,
                    },
                    {
                        img: slipDisney4,
                    },
                    {
                        img: slipDisney5,
                    },
                ],
            ],
        },
        {
            title: "Festive slip (Mother day & Songkarn day)",
            fixedCols: true,
            imgSets: [
                [
                    {
                        img: slipFestive1,
                    },
                    {
                        img: slipFestive2,
                    },
                    {
                        img: slipFestive3,
                    },
                    {
                        img: slipFestive4,
                    },
                    {
                        img: slipFestive5,
                    },
                ],
            ],
        },
        {
            title: "Ecosystem & Food lover slip",
            fixedCols: true,
            imgSets: [
                [
                    {
                        img: slipEcoFood1,
                    },
                    {
                        img: slipEcoFood2,
                    },
                    {
                        img: slipEcoFood3,
                    },
                    {
                        img: slipEcoFood4,
                    },
                    {
                        img: slipEcoFood5,
                    },
                ],
            ],
        },
        {
            title: "Other slip",
            fixedCols: true,
            imgSets: [
                [
                    {
                        img: slipOther1,
                    },
                    {
                        img: slipOther2,
                    },
                    {
                        img: slipOther3,
                    },
                    {
                        img: slipOther4,
                    },
                    {
                        img: slipOther5,
                    },
                ],
            ],
        },
    ],
};
