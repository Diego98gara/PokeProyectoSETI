import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosApiComponent } from './servicios-api/servicios-api.component';
import { NgbModule,NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanel } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServiciosApiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
