import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelOneByOneComponent } from './products-level-one-by-one.component';

describe('ProductsLevelOneByOneComponent', () => {
  let component: ProductsLevelOneByOneComponent;
  let fixture: ComponentFixture<ProductsLevelOneByOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelOneByOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelOneByOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
