import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product: any | undefined;
  productList: any|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getProduct(){

  }
}
