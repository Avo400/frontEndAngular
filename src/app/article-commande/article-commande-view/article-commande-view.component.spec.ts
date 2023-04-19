import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommandeViewComponent } from './article-commande-view.component';

describe('ArticleCommandeViewComponent', () => {
  let component: ArticleCommandeViewComponent;
  let fixture: ComponentFixture<ArticleCommandeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCommandeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCommandeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
