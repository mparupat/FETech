import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSendFileComponent } from './order-send-file.component';

describe('OrderSendFileComponent', () => {
  let component: OrderSendFileComponent;
  let fixture: ComponentFixture<OrderSendFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSendFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSendFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
