import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelOneByThreeComponent } from './products-level-one-by-three.component';

describe('ProductsLevelOneByThreeComponent', () => {
  let component: ProductsLevelOneByThreeComponent;
  let fixture: ComponentFixture<ProductsLevelOneByThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelOneByThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelOneByThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
