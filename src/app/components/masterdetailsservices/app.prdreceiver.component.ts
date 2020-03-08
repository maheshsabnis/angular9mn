import { Component, OnInit  } from '@angular/core';
import { ProductChild, PrdData } from '../../models/app.objects.model';
import { CommunicationService } from '../../sharedmodule/services/app.communication.service';
@Component({
  selector: 'app-prdreceiver-component',
  template: `
  <h2>Product Receiver Component</h2>
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

  `
})

export class PrdReceiverComponent implements OnInit {
  prd: ProductChild;
  prds = PrdData;
  private _FilterProducts: Array<ProductChild>;
  CatId: number;

  constructor(private serve: CommunicationService) {
   this.CatId = 0;
   this._FilterProducts = new Array<ProductChild>();
  }


  // subscribe to the emitted event once in the the receiver component
  ngOnInit() {
    this.serve.notify.subscribe((p) => {
        this.CatId = p;
    });
  }

  get FilterProducts(): Array<ProductChild> {
    this._FilterProducts = new Array<ProductChild>();
    if(this.CatId > 0) {
      this._FilterProducts = this.prds.filter((p,i) => {
        return p.CatId === this.CatId;
     });
    } else {
      this._FilterProducts =  this.prds;
    }

    return this._FilterProducts;
  }


}
