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

export interface Project {
    name: string;
    summary: string;
    desc: string;
    img: string;
    role: string;
    responsibility: string;
    title: string;
    splitCols?: boolean;
    details: Detail[];
}
