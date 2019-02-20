import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { GiphyService } from './giphy.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    GiphyService
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
