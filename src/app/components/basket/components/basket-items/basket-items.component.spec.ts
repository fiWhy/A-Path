import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemsComponent } from './basket-items.component';

describe('BasketItemsComponent', () => {
  let component: BasketItemsComponent;
  let fixture: ComponentFixture<BasketItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
