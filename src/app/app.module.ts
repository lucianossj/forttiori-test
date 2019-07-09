import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MinibusLinesService } from './services/minibus-lines.service';
import { HttpClientModule } from '@angular/common/http';
import { BusLinesService } from './services/bus-lines.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MinibusLinesService,
    BusLinesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
