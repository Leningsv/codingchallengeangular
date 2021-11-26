import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];

  constructor(
    private _productService: ProductService
  ) {
    this.initVariables();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private initVariables(): void {
    this.products = [];
  }

  private getProducts(): void {
    this._productService.getProducts().subscribe(result => this.products = result);
  }

}
