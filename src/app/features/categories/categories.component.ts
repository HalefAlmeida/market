import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories$: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.readAll();
  }

  updateCategoryStatus(category: any) {
    let categoryRef: Category = category;
    categoryRef.status = !categoryRef.status;
    this.categoryService.save(categoryRef);
  }
}
