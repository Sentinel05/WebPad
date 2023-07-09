import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LandingBodyComponent } from './landing-body/landing-body.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ContactBodyComponent } from './contact-body/contact-body.component';
import { AboutBodyComponent } from './about-body/about-body.component';
import { RouterModule, Routes } from '@angular/router';
import { RemarksBodyComponent } from './remarks-body/remarks-body.component';

const routes: Routes = [
  { path: '', component: HomeBodyComponent },
  { path: 'home', component: HomeBodyComponent },
  { path: 'contact', component: ContactBodyComponent },
  { path: 'about', component: AboutBodyComponent },
  { path: 'remarks', component: RemarksBodyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingBodyComponent,
    HomeBodyComponent,
    ContactBodyComponent,
    AboutBodyComponent,
    RemarksBodyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
