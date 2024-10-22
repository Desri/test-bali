import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeknoComponent } from './tekno.component';

describe('TeknoComponent', () => {
  let component: TeknoComponent;
  let fixture: ComponentFixture<TeknoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeknoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeknoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
