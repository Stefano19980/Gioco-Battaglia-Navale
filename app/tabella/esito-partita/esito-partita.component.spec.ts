import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsitoPartitaComponent } from './esito-partita.component';

describe('EsitoPartitaComponent', () => {
  let component: EsitoPartitaComponent;
  let fixture: ComponentFixture<EsitoPartitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsitoPartitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsitoPartitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
