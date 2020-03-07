import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/app.http.service';
import { SecureService } from './services/app.secure.service';
@NgModule({
  imports: [ CommonModule, HttpClientModule ],
  providers: [HttpService, SecureService],
})
export class SharedModule {}
