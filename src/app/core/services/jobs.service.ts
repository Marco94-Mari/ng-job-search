import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../shared/models/job.model';
import { HttpClient } from '@angular/common/http';
import { JobDetail } from '../../shared/models/job-detail.model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private jobsUrl = '/jobs';
  favoriteJobsList: Job[] = [];

  constructor(private http: HttpClient) {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favoriteJobsList = JSON.parse(storedFavorites) as Job[];
    }
  }
  fetchAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }
  fetchJob(jobId: number): Observable<JobDetail> {
    return this.http.get<JobDetail>(`${this.jobsUrl}/${jobId}`);
  }
  manageFavorites(job: Job): void {
    if (this.isFavorite(job)) {
      this.favoriteJobsList = this.favoriteJobsList.filter(
        (f) => f.id !== job.id
      );
    } else {
      this.favoriteJobsList.push(job);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favoriteJobsList));
  }
  private isFavorite(job: Job): boolean {
    return this.favoriteJobsList.some((f) => f.id === job.id);
  }
}
