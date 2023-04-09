import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsLevelThreeOneComponent } from './products-level-three-one/products-level-three-one.component';
import { ProductsLevelThreeTwoComponent } from './products-level-three-two/products-level-three-two.component';
import { ProductsLevelOneByOneComponent } from './products-level-one-by-one/products-level-one-by-one.component';
import { ProductsLevelOneByTwoComponent } from './products-level-one-by-two/products-level-one-by-two.component';
import { ProductsLevelOneByThreeComponent } from './products-level-one-by-three/products-level-one-by-three.component';
import { ProductsOthersComponent } from './products-others/products-others.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsLevelThreeOneComponent,
    ProductsLevelThreeTwoComponent,
    ProductsLevelOneByOneComponent,
    ProductsLevelOneByTwoComponent,
    ProductsLevelOneByThreeComponent,
    ProductsOthersComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
