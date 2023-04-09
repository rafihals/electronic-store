import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelOneByTwoComponent } from './products-level-one-by-two.component';

describe('ProductsLevelOneByTwoComponent', () => {
  let component: ProductsLevelOneByTwoComponent;
  let fixture: ComponentFixture<ProductsLevelOneByTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelOneByTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelOneByTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
