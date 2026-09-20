import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  notFound = false;

  previous?: Project;
  next?: Project;

  activePhotoIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.project = this.projectService.getById(id);
      this.notFound = !this.project;
      this.activePhotoIndex = null;

      if (this.project) {
        const all = this.projectService.getAll();
        const i = all.findIndex((p) => p.id === this.project!.id);
        this.previous = all[i - 1];
        this.next = all[i + 1];
      }
    });
  }

  openPhoto(index: number): void {
    this.activePhotoIndex = index;
  }

  closePhoto(): void {
    this.activePhotoIndex = null;
  }
}