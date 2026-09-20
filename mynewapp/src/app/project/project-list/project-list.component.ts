 import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  readonly lines: string[];
  readonly totals: { projects: number; regions: number; lines: number; active: number };

  activeLine: string | null = null;

  private readonly all: Project[];

  constructor(private projectService: ProjectService) {
    this.all = this.projectService.getAll();
    this.lines = this.projectService.getLines();
    this.totals = this.projectService.getTotals();
  }

  get projects(): Project[] {
    if (!this.activeLine) return this.all;
    return this.all.filter((p) => p.line === this.activeLine);
  }

  countFor(line: string): number {
    return this.all.filter((p) => p.line === line).length;
  }

  filterBy(line: string | null): void {
    this.activeLine = this.activeLine === line ? null : line;
  }

  trackById(_: number, project: Project): number {
    return project.id;
  }
}
