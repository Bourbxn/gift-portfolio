import type { DEMO_TYPE } from "../constants/constants";

export interface ImageSet {
    title?: string;
    colSpan?: number;
    img: string;
}

export interface SubDetail {
    title: string;
    desc?: string;
    imgSets: ImageSet[][];
}

export interface Detail {
    title: string;
    desc?: string;
    subDetails?: SubDetail[];
    subDetailsNumber?: boolean;
    imgSets?: ImageSet[][];
    fixedCols?: boolean;
}

export type DemoType = (typeof DEMO_TYPE)[keyof typeof DEMO_TYPE];

export interface Demo {
    url: string;
    type: DemoType;
}

export interface Project {
    name: string;
    summary: string;
    desc: string;
    img: string;
    role: string;
    responsibility: string;
    title: string;
    demo?: Demo;
    splitCols?: boolean;
    details: Detail[];
}
