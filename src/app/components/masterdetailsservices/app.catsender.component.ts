import { Component, OnInit } from '@angular/core';
import { CategoryMaster, CatData } from '../../models/app.objects.model';
import { CommunicationService } from '../../sharedmodule/services/app.communication.service';

@Component({
  selector: 'app-catsender-component',
  template: `
    <h2>Category Sender Component</h2>
    <table class="table table-bordered table-striped">
    <tbody>
      <tr>
        <td>
           <input type="radio" name="r" (click)="color='red'"> Red
        </td>
        <td>
           <input type="radio" name="r" (click)="color='Blue'"> Blue
        </td>
        <td>
           <input type="radio" name="r" (click)="color='yellow'"> Yellow
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>CatId</th>
          <th>CatName</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cat of cats" (click)="getSelectedCat(cat)" [setColor]="color">
            <td>{{cat.CatId}}</td>
            <td>{{cat.CatName}}</td>
        </tr>
      </tbody>
    </table>
    <br>

  `
})

export class CatSenderComponent implements OnInit {
  c: CategoryMaster;
  cats = CatData;
  message: string;
  color: string;
  constructor(private serv: CommunicationService) {
    this.c = new CategoryMaster(0,'');
    this.message = '';
    this.color ='';
   }

  ngOnInit() { }

  getSelectedCat(ct: CategoryMaster) : void {
    this.c = ct;
    this.serv.sendData(this.c.CatId);
  }


}
