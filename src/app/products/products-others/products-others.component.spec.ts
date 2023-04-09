import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOthersComponent } from './products-others.component';

describe('ProductsOthersComponent', () => {
  let component: ProductsOthersComponent;
  let fixture: ComponentFixture<ProductsOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
