import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketNetComponent } from './basket-net.component';

describe('BasketNetComponent', () => {
  let component: BasketNetComponent;
  let fixture: ComponentFixture<BasketNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
