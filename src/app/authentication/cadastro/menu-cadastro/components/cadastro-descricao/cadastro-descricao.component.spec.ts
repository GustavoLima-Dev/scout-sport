import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDescricaoComponent } from './cadastro-descricao.component';

describe('CadastroDescricaoComponent', () => {
  let component: CadastroDescricaoComponent;
  let fixture: ComponentFixture<CadastroDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDescricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
