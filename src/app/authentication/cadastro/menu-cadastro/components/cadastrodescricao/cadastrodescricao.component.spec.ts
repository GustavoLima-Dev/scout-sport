import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodescricaoComponent } from './cadastrodescricao.component';

describe('CadastrodescricaoComponent', () => {
  let component: CadastrodescricaoComponent;
  let fixture: ComponentFixture<CadastrodescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrodescricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrodescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
