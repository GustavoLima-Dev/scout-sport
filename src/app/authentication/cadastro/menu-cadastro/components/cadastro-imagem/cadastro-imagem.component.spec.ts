import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroImagemComponent } from './cadastro-imagem.component';

describe('CadastroImagemComponent', () => {
  let component: CadastroImagemComponent;
  let fixture: ComponentFixture<CadastroImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
