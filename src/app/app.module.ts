import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralInformationComponent,
    ContactInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
