// BrowserModule, loads the AppModule Contents in browser and render it
import { BrowserModule } from '@angular/platform-browser';
// NgModule the class decorator to define class as Angular Module
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Custom Module for containing Routing Object Model
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryReactiveFormComponent} from './components/categoryreactiveformcomponent/app.categoryreactiveform.component';
import { SharedModule } from './sharedmodule/app.shared.module';
import { HttpServiceComponent } from './components/httpservicecompoinent/app.httpservice.component';
import {CatMasterComponent} from './components/masterdetails/app.catmaster.component';
import { PrdChildComponent } from './components/masterdetails/app.prdchild.component';
import { CatSenderComponent } from './components/masterdetailsservices/app.catsender.component';
import { PrdReceiverComponent } from './components/masterdetailsservices/app.prdreceiver.component';
import { ColorDirective } from './directives/app.color.directive';

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
    AppComponent, CategoryReactiveFormComponent, HttpServiceComponent,
    CatMasterComponent, PrdChildComponent, CatSenderComponent,
    PrdReceiverComponent, ColorDirective
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,
    AppRoutingModule, SharedModule
  ],
  providers: [],
  bootstrap: [ CatSenderComponent, PrdReceiverComponent]
})
export class AppModule { }
