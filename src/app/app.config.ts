import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  ionBookmarkOutline,
  ionMail,
  ionLogoGithub,
  ionLogoLinkedin,
  ionLogoWhatsapp,
  ionLogoInstagram,
  ionLogoFacebook,
  ionSearchOutline,
  ionMenu,
  ionClose,
  ionArrowBackOutline,
  ionThumbsUpOutline,
  ionThumbsDownOutline,
  ionShareSocialOutline,
} from '@ng-icons/ionicons';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIcons({
      ionBookmarkOutline,
      ionMail,
      ionLogoGithub,
      ionLogoLinkedin,
      ionLogoWhatsapp,
      ionLogoFacebook,
      ionLogoInstagram,
      ionSearchOutline,
      ionMenu,
      ionClose,
      ionArrowBackOutline,
      ionThumbsUpOutline,
      ionThumbsDownOutline,
      ionShareSocialOutline,
    }),
  ],
};
