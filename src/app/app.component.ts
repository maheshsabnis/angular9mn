import { Component } from '@angular/core';

// selector: The Custom HTML Tag that will be used to refer and load component in DOM
// templateUrl : the external HTML file that contains UI for Component
// template: an inline HTML the contains UI for Component
// style: Inline CSS
// styleUrls: External css files

@Component({
  selector: 'app-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-app';
  message: string;
  name: string;
  names: Array<string>;
  categories: Array<any>;
  selectedName: string;
  selectedCat: any;

  constructor() {
    this.message = 'My Name is Angular';
    this.name = '';
    this.names = ['James Bond', 'Ethan Hunt', 'Indiana Jones', 'Jason Bourn'];
    this.categories = [
      {CatId: 101, CatName: 'ECT'},
      {CatId: 102, CatName: 'ECL'},
      {CatId: 103, CatName: 'FOD'}
    ];
    this.selectedName = '';
    this.selectedCat  = {};
  }
  display(): void {
    this.message = 'My Name is Angular 9';
  }
  accepyValue(evt): void {
    this.message += evt.target.value;
  }
}
