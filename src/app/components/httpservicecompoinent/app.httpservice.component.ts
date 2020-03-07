import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../sharedmodule/services/app.http.service';
import { Category } from '../../models/app.category.model';
import { SecureService } from '../../sharedmodule/services/app.secure.service';
import { RegisterUser, LoginUser } from '../../models/app.secure.models';

@Component({
  selector: 'app-httpservice-component',
  template: `
    <input type="button" value="get data" class="btn btn-warning" (click)="loadData()"/>
    <br/>
    <input type="button" value="post data" class="btn btn-success" (click)="saveData()"/>
    <br/>
    <input type="button" value="Register User" class="btn btn-warning" (click)="registerUser()"/>
    <br/>
    <input type="button" value="Login" class="btn btn-success" (click)="login()"/>
    <br/>
    <input type="button" value="Get Products" class="btn btn-success" (click)="getProducts()"/>

  `
})

export class HttpServiceComponent implements OnInit {
   categories: Array<Category>;
  // inject the HttpService
  constructor(private serv: HttpService, private sec: SecureService) {
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

  registerUser(): void {
    const user: RegisterUser = new RegisterUser('mahesh007@msit.com', 'P@ssw0rd_','P@ssw0rd_');
    this.sec.registerUser(user).subscribe((resp) => {
      console.log(JSON.stringify(resp));
    }, (error)=> {
      console.log(JSON.stringify(error));
    });
  }

  login(): void {
    const user: LoginUser = new LoginUser('mahesh007@msit.com', 'P@ssw0rd_');
    this.sec.loginUser(user).subscribe((resp) => {
      console.log(JSON.stringify(resp));
      // save received token in the local storage
      localStorage.setItem('token', resp.message);
    }, (error)=> {
      console.log(JSON.stringify(error));
    });
  }

  getProducts(): void {
    // receive token from the local storage
    const token =localStorage.getItem('token');
    this.sec.getProducts(token).subscribe((resp) => {
      console.log(JSON.stringify(resp));

    }, (error)=> {
      console.log(JSON.stringify(error));
    });
  }
}
