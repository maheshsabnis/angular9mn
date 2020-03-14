import { Component, OnInit } from '@angular/core';
// Router class provides method to route based on event
import {Router} from '@angular/router';
@Component({
  selector:'app-About-component',
  template: `
     <h2> The About Component</h2>
     <div>{{message}}</div>
     <br>

  `
})
export class AboutComponent implements OnInit {
  message: string;

  constructor(private router: Router) {
    this.message = 'This is About Component';
  }

  ngOnInit() {

  }

}
