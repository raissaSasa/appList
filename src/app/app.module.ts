import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RayonsListComponent } from './rayons-list/rayons-list.component';
import { RayonDetailsComponent } from './rayon-details/rayon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RayonsListComponent,
    RayonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
