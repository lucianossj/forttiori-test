import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MinibusLinesService } from './services/minibus-lines.service';
import { HttpClientModule } from '@angular/common/http';
import { BusLinesService } from './services/bus-lines.service';
import { IdForm } from './forms/idForm';
import { MinibusNameForm } from './forms/minibusNameForm';
import { BusNameForm } from './forms/busNameForm';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MinibusLinesService,
    BusLinesService,
    IdForm,
    MinibusNameForm,
    BusNameForm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
