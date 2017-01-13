import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe.url.pipe';
import { SafeStylePipe } from './safe.style.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeUrlPipe,
    SafeStylePipe
  ],
  exports: [
    SafeUrlPipe,
    SafeStylePipe
  ]
})
export class PipesModule { }
