import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../sharedmodule/services/app.http.service';
import { Category } from '../../models/app.category.model';

@Component({
  selector: 'app-httpservice-component',
  template: `
    <input type="button" value="get data" class="btn btn-warning" (click)="loadData()"/>
    <br/>
    <input type="button" value="post data" class="btn btn-success" (click)="saveData()"/>
  `
})

export class HttpServiceComponent implements OnInit {
   categories: Array<Category>;
  // inject the HttpService
  constructor(private serv: HttpService) {
    this.categories = new Array<Category>();
  }

  ngOnInit() {
    this.loadData();
  }

   loadData(): void {
     this.serv.getData().subscribe((resp)=> {
        this.categories = resp;
        console.log(`Categories  ${JSON.stringify(this.categories)}`);
     },(error)=> {
       console.log(`Error Occured ${error}`);
     });
  }

  saveData(): void {
     let cat = new Category(0, 'Cat0008', 'TestCat', 10000);
     this.serv.postData(cat).subscribe((resp)=> {
      console.log(`Categories  ${JSON.stringify(resp)}`);
   },(error)=> {
     console.log(`Error Occured ${error}`);
   });
  }
}
