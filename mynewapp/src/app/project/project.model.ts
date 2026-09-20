export type ProjectStatus = 'activo' | 'finalizado' | 'recurrente';

export interface ProjectMetric {
    value: string;
    label: string;
    method?: string;
    }

    export interface ProjectPhoto {
    src: string;
    alt: string;
    caption?: string;
    }

    export interface ProjectTestimonial {
    quote: string;
    author: string;
    role: string;
    photo?: string;
    }

    export interface ProjectPartner {
    name: string;
    url?: string;
    logo?: string;
    kind?: string;
    }

    export interface ProjectMilestone {
    date: string;
    title: string;
    detail: string;
    }

    export interface ProjectPressItem {
    outlet: string;
    title: string;
    url: string;
    date?: string;
    }

    export interface Project {
    id: number;
    slug: string;
    name: string;
    year: string;
    location: string;
    region: string;
    line: string;
    tag: string;
    status: ProjectStatus;
    imageClass: string;

    featured?: boolean;

    summary: string;
    impact: string;

    challenge: string;
    approach: string;
    outcome: string;
    nextStep?: string;

    metrics: ProjectMetric[];
    photos: ProjectPhoto[];
    testimonials: ProjectTestimonial[];
    partners: ProjectPartner[];
    timeline: ProjectMilestone[];
    press: ProjectPressItem[];
    report?: { label: string; url: string };

    volunteers?: number;
    fundingSource?: string;
}