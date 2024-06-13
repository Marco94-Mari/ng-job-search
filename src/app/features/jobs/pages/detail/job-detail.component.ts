import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Job } from '../../../../shared/models/job.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobDetail } from '../../../../shared/models/job-detail.model';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SafeHtmlPipe, DatePipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
})
export class JobDetailComponent implements OnInit {
  data$: Observable<JobDetail> | undefined;

  constructor(
    private _jobsService: JobsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const jobId = params.get('id');
      if (jobId) {
        this.fetchData(+jobId);
      }
    });
  }

  fetchData(jobId: number): void {
    this.data$ = this._jobsService.fetchJob(jobId);
  }
}
