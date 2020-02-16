// BrowserModule, loads the AppModule Contents in browser and render it
import { BrowserModule } from '@angular/platform-browser';
// NgModule the class decorator to define class as Angular Module
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


// Custom Module for containing Routing Object Model
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// imports: of the type array, used to import and load standard Angular Modules
// and external modules in current application
// declarations: of the type array, used to declare instances of all components,
// directives and pipes of this application in current module
// pipes: of the type array, used to register angular service in DI Container ar Module
// level
// bootstrap:  of the type array, used to bootstrap one or more compoent in browser
// when AppModule is loaded
// exports: array type, used to export components/services/directives/pipes from current
// application to other Angular application
// entryComponent: Components not bootstraped but used by bootstraped components to load
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
