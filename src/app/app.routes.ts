import { Routes } from '@angular/router';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { JobsComponent } from './features/jobs/pages/jobs/jobs.component';
import { JobDetailComponent } from './features/jobs/pages/detail/job-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full',
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'jobs/:id',
    component: JobDetailComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];
