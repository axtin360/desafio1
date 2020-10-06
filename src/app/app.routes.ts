import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { BioComponent } from './bio/bio.component';




const APP_ROUTES: Routes = [
    { path: 'inicio', component: PersonajesComponent },
    { path: 'datos/:id', component: BioComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
