import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { DataEvolutionComponent} from '../app/pages/data-evolution/data-evolution.component'


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data_evolution', component: DataEvolutionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, /**{useHash:true}**/);
