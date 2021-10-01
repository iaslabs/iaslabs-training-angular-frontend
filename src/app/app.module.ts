import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { HttpClientModule } from '@angular/common/http/';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { FormTechnicianComponent } from './components/technician/components/form-technician/form-technician.component';
import { TechnicianComponent } from './components/technician/technician.component';
import { ListTechniciansComponent } from './components/technician/components/list-technicians/list-technicians.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTechnicianComponent,
    TechnicianComponent,
    ListTechniciansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
