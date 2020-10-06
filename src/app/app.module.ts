import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosService } from './servicios/datos.service';
import { MatCardModule, MatGridListModule, MatTableModule } from '@angular/material';
import { PersonajesComponent } from './personajes/personajes.component';
import { MatButtonModule } from '@angular/material/button';
import { APP_ROUTING } from './app.routes';
import { TituloComponent } from './components/titulo/titulo.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    TituloComponent,
    BioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    APP_ROUTING
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
