import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomTitleStrategy } from './CustomTitleStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    importProvidersFrom(RouterModule.forRoot(routes)),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ]
};
