import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthCardComponent } from './fifth-card.component';

describe('FifthCardComponent', () => {
  let component: FifthCardComponent;
  let fixture: ComponentFixture<FifthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
