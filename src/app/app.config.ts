import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { ionBookmarkOutline } from '@ng-icons/ionicons';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideIcons({ ionBookmarkOutline })],
};
