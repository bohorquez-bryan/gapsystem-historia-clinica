import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { APP_ROUTING } from './app.routes';

// Material
import { MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ButtonComponent } from './components/button/button.component';
import { DataEvolutionComponent } from './pages/data-evolution/data-evolution.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './pages/resume/resume.component';
import { DataPatientComponent} from './pages/data-patient/data-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ButtonComponent,
    DataEvolutionComponent,
    HomeComponent,
    ResumeComponent,
    DataPatientComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
