import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthCardComponent } from './sixth-card.component';

describe('SixthCardComponent', () => {
  let component: SixthCardComponent;
  let fixture: ComponentFixture<SixthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
