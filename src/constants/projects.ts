import type { Project } from "../types/projects";
import { carParkingProject } from "./projects/carParkingProject";
import { commonPaymentProject } from "./projects/commonPaymentProject";
import { dustSentryProject } from "./projects/dustSentryProject";
import { homePageRedesignProject } from "./projects/homePageRedesignProject";
import { illustrationUiProject } from "./projects/illustrationUiProject";
import { playboardProject } from "./projects/playboardProject";
import { slipProject } from "./projects/slipProject";
import { tutorForUProject } from "./projects/tutorForUProject";
import { tutorialProject } from "./projects/tutorialProject";
import { uxuiFeatureProject } from "./projects/uxuiFeatureProject";
import { wowProject } from "./projects/wowProject";

export const projects: Project[] = [
    wowProject,
    commonPaymentProject,
    tutorialProject,
    slipProject,
    uxuiFeatureProject,
    playboardProject,
    dustSentryProject,
    tutorForUProject,
    carParkingProject,
    homePageRedesignProject,
    illustrationUiProject,
];
