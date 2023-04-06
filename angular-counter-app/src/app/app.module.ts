import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberContainerComponent } from './number-container/number-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // per lavorare con chiamate http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
