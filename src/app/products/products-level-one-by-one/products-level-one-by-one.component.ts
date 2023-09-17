import { Component, OnInit } from '@angular/core';
import { ElectronicService } from 'src/app/z-service/electronic.service';

@Component({
  selector: 'app-products-level-one-by-one',
  templateUrl: './products-level-one-by-one.component.html',
  styleUrls: ['./products-level-one-by-one.component.scss']
})
export class ProductsLevelOneByOneComponent {

  product: any;
  selectedProduct: any;

  constructor(private svc: ElectronicService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.svc.getProducts().subscribe(product => {
      this.product = product
    })
  }
}
