import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDialogoComponent } from './plan-dialogo.component';

describe('PlanDialogoComponent', () => {
  let component: PlanDialogoComponent;
  let fixture: ComponentFixture<PlanDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
