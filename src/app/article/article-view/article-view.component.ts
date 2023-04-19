import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Article } from '../Article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  article: Article = new Article();
  articles: Article[] = new Array<Article>();
  id: any;
  formModified: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private articleService: ArticleService, 
        public confirmService: NgConfirmService) {
  }

  ngOnInit(): void {
    
    const articleId  = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.findAll().subscribe(data => {
      this.articles = data;
      if (articleId) {
        this.id = +articleId;
        this.applyFilter();
      }
    });
  }

  applyFilter(){
    const result = this.articles.filter(x => x.id === this.id);
    if (result) {
      this.article = result[0];
    }
  }

  modifierArticle() {
    this.formModified = true;
  }

  supprimerArticle() {
    this.confirmService.showConfirm("Etes-vous sûr de supprimer " + this.article.name + " ?",
     () => {
    this.articleService.deleteArticle(this.article).subscribe(result => this.goToArticleList());

    },
    () => {
      this.goToArticleList();
    })
    
  }

  goToArticleList() {
    this.router.navigate(['/articles']);
  }
}
