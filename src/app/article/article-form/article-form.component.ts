import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../Article';
import { ArticleService } from '../article.service';
import { Categorie } from 'src/app/categorie/Categorie';
import { CategorieService } from 'src/app/categorie/categorie.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  @Input() article: Article = new Article();
  selectedCategorie = new Categorie();
  selectedCategorieId: number = 0;
  categories: Categorie[] = [];
  
  public selected: Categorie = new Categorie;
  modeUpdate: boolean = false;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private articleService: ArticleService,
        private categorieService : CategorieService) {
    
  }


  ngOnInit(): void {
    this.modeUpdate = (+this.article.id>0);
    if (this.modeUpdate) {
      this.selectedCategorie = this.article.categorie;
      this.selectedCategorieId = this.article.categorie.id;
    } else
    {
      this.selectedCategorie = new Categorie();
    }
    this.categorieService.findAll().subscribe(data => {
      this.categories = data;
      
    })
  }
  onCategorieChange(value: any){
    alert(JSON.stringify(value)); // garder ce code afin de debugguer
  }
  onSubmit() {
    if (this.modeUpdate) {
      this.articleService.updateArticle(this.article).subscribe(result => this.goToArticleList());
    } else {
      this.articleService.addArticle(this.article).subscribe(result => this.goToArticleList());
    }
  }

  goToArticleList() {
    this.router.navigate(['/articles']);
  }

}
