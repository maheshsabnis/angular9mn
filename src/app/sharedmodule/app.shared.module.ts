import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/app.http.service';
@NgModule({
  imports: [ CommonModule, HttpClientModule ],
  providers: [HttpService],
})
export class SharedModule {}
