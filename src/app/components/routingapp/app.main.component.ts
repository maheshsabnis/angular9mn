import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-main-component',
  template: `
    <h2>The Main Component</h2>
    <table class="table table-bordered table-striped">
      <tr>
        <td>

        </td>
        <td>

          </td>
          <td>

        </td>
      </tr>
    </table>
    <br/>
    <router-outlet></router-outlet>
  `
})

export class MainComponent implements OnInit {
  id: number;
  constructor() {

  }

  ngOnInit() {

  }

}
