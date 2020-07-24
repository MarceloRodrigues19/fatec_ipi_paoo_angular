import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecTituloComponent } from './fatec-titulo.component';

describe('FatecTituloComponent', () => {
  let component: FatecTituloComponent;
  let fixture: ComponentFixture<FatecTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
