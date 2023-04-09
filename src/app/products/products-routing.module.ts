import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLevelThreeOneComponent } from './products-level-three-one/products-level-three-one.component';
import { ProductsLevelThreeTwoComponent } from './products-level-three-two/products-level-three-two.component';
import { ProductsLevelOneByOneComponent } from './products-level-one-by-one/products-level-one-by-one.component';
import { ProductsLevelOneByTwoComponent } from './products-level-one-by-two/products-level-one-by-two.component';
import { ProductsLevelOneByThreeComponent } from './products-level-one-by-three/products-level-one-by-three.component';
import { ProductsOthersComponent } from './products-others/products-others.component';

const routes: Routes = [
  {
    path: 'apple',
    component: ProductsLevelOneByOneComponent
  },
  {
    path: 'android',
    component: ProductsLevelOneByTwoComponent
  },
  {
    path: 'windows',
    component: ProductsLevelOneByThreeComponent
  },
  {
    path: 'bluetooth',
    component: ProductsLevelThreeOneComponent
  },
  {
    path: 'cable',
    component: ProductsLevelThreeTwoComponent
  },
  {
    path: 'others',
    component: ProductsOthersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
