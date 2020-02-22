// importing the exported class from the file
import { Category } from './app.category.model';
export class CategoryLogic {
   categories: Array<Category>;

   constructor() {
     this.categories = new Array<Category>();
     this.categories.push(new Category(1, 'Cat0001', 'Electronics', 12000));
     this.categories.push(new Category(2, 'Cat0002', 'Electrical', 400));
     this.categories.push(new Category(3, 'Cat0003', 'Food', 30));
     this.categories.push(new Category(4, 'Cat0004', 'Fashion', 620));
   }

   getCategoris(): Array<Category> {
     return this.categories;
   }

   saveCategory(cat: Category): Array<Category> {
    this.categories.push(cat);
    return this.categories;
  }
}
