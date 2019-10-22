import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownPresentorComponent } from './components/dropdown-presentor/dropdown-presentor.component';
import { DropdownContainerComponent } from './components/dropdown-container/dropdown-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownPresentorComponent,
    DropdownContainerComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
