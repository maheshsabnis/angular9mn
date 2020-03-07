import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductChild, PrdData } from '../../models/app.objects.model';
@Component({
  selector: 'app-prdchild-component',
  template: `
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
        <th>Prod Id</th>
        <th>Prod Name</th>
          <th>CatId</th>

        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of FilterProducts">
            <td>{{p.ProdId}}</td>
            <td>{{p.ProdName}}</td>
            <td>{{p.CatId}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <input type="button" class="btn btn-danger" value="Notify" (click)="notifyToParent()">
  `
})

export class PrdChildComponent implements OnInit {
  prd: ProductChild;
  prds = PrdData;
  private _FilterProducts: Array<ProductChild>;
  private _CatId: number;
  @Output()
  notify: EventEmitter<string>;
  constructor() {
   this._CatId = 0;
   this._FilterProducts = new Array<ProductChild>();
   this.notify = new EventEmitter<string>();
  }

  // CatId will be used by parent for property binding e.g. [CatId]

  @Input()
  set CatId(v:  number) {
    this._CatId = v;
    console.log(this._CatId);
  }
  get CatId(): number {
    return this._CatId;
  }
  ngOnInit() { }

  get FilterProducts(): Array<ProductChild> {
    this._FilterProducts = new Array<ProductChild>();
    if(this._CatId > 0) {
      this._FilterProducts = this.prds.filter((p,i) => {
        return p.CatId === this._CatId;
     });
    } else {
      this._FilterProducts =  this.prds;
    }

    return this._FilterProducts;
  }


  // emit the event
  notifyToParent(): void {
    this.notify.emit(`We have found ${this._FilterProducts.length} recotrds for CatId ${this._CatId}`);
  }

}
