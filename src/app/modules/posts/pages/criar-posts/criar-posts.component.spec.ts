import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPostsComponent } from './criar-posts.component';

describe('CriarPostsComponent', () => {
  let component: CriarPostsComponent;
  let fixture: ComponentFixture<CriarPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
