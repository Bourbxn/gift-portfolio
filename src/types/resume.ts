export interface Institution {
    name: string;
    shortName: string;
}

export interface Education {
    institution: Institution;
    degree: string;
    dateStart: string;
    dateEnd: string;
}

export interface WorkExperience {
    position: string;
    company: string;
    dateStart: string;
    dateEnd: string;
    works: string[];
}

export interface Award {
    contest: string;
    works: string[];
}

export interface Resume {
    fullName: string;
    desc: string[];
    education: Education;
    workExperiences: WorkExperience[];
    awards: Award[];
}
