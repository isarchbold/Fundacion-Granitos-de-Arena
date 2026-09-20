import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.data';
import { Project } from './project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    getAll(): Project[] {
        return PROJECTS;
    }

    getById(id: number): Project | undefined {
        return PROJECTS.find((p) => p.id === id);
    }

    getBySlug(slug: string): Project | undefined {
        return PROJECTS.find((p) => p.slug === slug);
    }

    getLines(): string[] {
        return [...new Set(PROJECTS.map((p) => p.line))];
    }

    getRegions(): string[] {
        return [...new Set(PROJECTS.map((p) => p.region))];
    }

    getTotals() {
        return {
        projects: PROJECTS.length,
        regions: this.getRegions().length,
        lines: this.getLines().length,
        active: PROJECTS.filter((p) => p.status === 'activo').length,
        };
    }
}