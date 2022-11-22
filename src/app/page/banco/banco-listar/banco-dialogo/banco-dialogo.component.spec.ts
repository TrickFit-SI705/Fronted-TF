import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDialogoComponent } from './banco-dialogo.component';

describe('BancoDialogoComponent', () => {
  let component: BancoDialogoComponent;
  let fixture: ComponentFixture<BancoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
