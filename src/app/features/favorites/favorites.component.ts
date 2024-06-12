import { Component } from '@angular/core';
import { Job } from '../../shared/models/job.model';
import { JobsService } from '../../core/services/jobs.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  data: Job[] = [];

  constructor(private _jobsService: JobsService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.data = this._jobsService.favoriteJobsList;
  }
}
