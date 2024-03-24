import { Routes } from '@angular/router';
import { MaintenanceGuard } from './core/guards/maintenance.guard';
import { ErrorComponent } from './core/pages/error/error.component';
import { MaintenanceComponent } from './core/pages/maintenance/maintenance.component';
import { HomeComponent } from './features/home/home.component';
import { BlogComponent } from './features/blog/blog.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MaintenanceGuard],
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [MaintenanceGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'subscribe',
    component: ContactComponent,
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
