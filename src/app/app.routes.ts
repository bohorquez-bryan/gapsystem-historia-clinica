import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { DataEvolutionComponent} from '../app/pages/data-evolution/data-evolution.component';
import { DoctorComponent} from '../app/pages/doctor/doctor.component';
import { ResumeComponent} from '../app/pages/resume/resume.component'


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data_evolution', component: DataEvolutionComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'doctor', component: DoctorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
