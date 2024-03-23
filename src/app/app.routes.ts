import { Routes } from '@angular/router';
import { MaintenanceGuard } from './core/guards/maintenance.guard';
import { ErrorComponent } from './core/pages/error/error.component';
import { MaintenanceComponent } from './core/pages/maintenance/maintenance.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MaintenanceGuard],
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate: [MaintenanceGuard],
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
