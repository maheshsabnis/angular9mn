import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.category.model';
import { CategoryLogic } from '../../models/app.category.logic';

// imporing FormGroup and the FormControl for implementing
// the reactive form
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-categoryreactiveform-component',
  templateUrl: './app.categoryreactiveform.view.html'
})
export class CategoryReactiveFormComponent implements OnInit {
  // OnInit: is the Component Lifecycle interface, that provides
  // the ngOnInIt() method
  category: Category;
  private logic: CategoryLogic;
  categories: Array<Category>;
  // define the FormGroup object, this will be used to map Model class properties to Form
  frmCategory: FormGroup;

  tableColumnHeaders: Array<string>;
  constructor() {
    this.logic  =new CategoryLogic();
    this.categories = new Array<Category>();
    this.category   =  new Category(0, '', '', 0);
    this.tableColumnHeaders = new Array<string>();
    // instantiate the frmCategory and map properties of category class using
    // FormControl into the group
    this.frmCategory  =new FormGroup({
      CategoryRowId : new FormControl(this.category.CategoryRowId),
      CategoryId : new FormControl(this.category.CategoryId),
      CategoryName : new FormControl(this.category.CategoryName),
      BasePrice : new FormControl(this.category.BasePrice)
    });
  }

  // this method is invoked immediately after ctor 'only-once'
  // write logic in this method that we cannot write on ctor or
  // if such logic is written in ctor, it will delay ctor execution
  ngOnInit(): void {
    // iterate over the category object to read all its property names
    for(let p in this.category) {
      this.tableColumnHeaders.push(p);
    }
    this.categories = this.logic.getCategoris();
  }

  clear(): void {
    this.category   =  new Category(0, '', '', 0);
    this.frmCategory.setValue(this.category);
  }
  save(): void {
    // read the posted data from ReactForm using 'value' property of
    // frmCategory, the instance of FormGroup
    this.category = this.frmCategory.value;
    this.categories = this.logic.saveCategory(this.category);
  }
  getSelectedCategory(cat: Category): void {
    this.frmCategory.setValue(cat); // set the value of form based on selected category
    this.category = this.frmCategory.value;
  }
}
