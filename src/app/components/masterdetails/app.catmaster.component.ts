import { Component, OnInit } from '@angular/core';
import { CategoryMaster, CatData } from '../../models/app.objects.model';

@Component({
  selector: 'app-catmaster-component',
  template: `
    <div>
       <h2>
         {{message}}
       </h2>
    </div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>CatId</th>
          <th>CatName</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cat of cats" (click)="getSelectedCat(cat)">
            <td>{{cat.CatId}}</td>
            <td>{{cat.CatName}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <app-prdchild-component [CatId]="c.CatId" (notify)="receive($event)"></app-prdchild-component>
  `
})

export class CatMasterComponent implements OnInit {
  c: CategoryMaster;
  cats = CatData;
  message: string;
  constructor() {
    this.c = new CategoryMaster(0,'');
    this.message = '';
   }

  ngOnInit() { }

  getSelectedCat(ct: CategoryMaster) : void {
    this.c = ct;
  }

  receive(event): void {
      this.message = event;
  }
}
