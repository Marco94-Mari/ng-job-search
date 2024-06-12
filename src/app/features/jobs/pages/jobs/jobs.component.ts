import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Job } from '../../../../shared/models/job.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent implements OnInit {
  data$: Observable<Job[]> | undefined;

  constructor(private _jobsService: JobsService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.data$ = this._jobsService.fetchAllJobs();
  }

  toggleFavorite(job: Job): void {
    this._jobsService.manageFavorites(job);
  }

  isAmongFavorites(job: Job): boolean {
    return this._jobsService.favoriteJobsList.some((j) => job.id === j.id);
  }
}
