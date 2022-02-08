import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.readAll();
  }
}
