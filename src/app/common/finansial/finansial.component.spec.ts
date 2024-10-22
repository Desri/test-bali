import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansialComponent } from './finansial.component';

describe('FinansialComponent', () => {
  let component: FinansialComponent;
  let fixture: ComponentFixture<FinansialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinansialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinansialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
