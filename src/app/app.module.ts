import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PipesModule } from './pipes/pipes.module';

import { ConsultaCiutatsService } from './consulta-ciutats.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipesModule
  ],
  providers: [ ConsultaCiutatsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
