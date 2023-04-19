import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ArticleCommande } from '../ArticleCommande';
import { ArticleCommandeService } from '../articleCommande.service';

@Component({
  selector: 'app-articleCommande-view',
  templateUrl: './article-commande-view.component.html',
  styleUrls: ['./article-commande-view.component.css']
})
export class ArticleCommandeViewComponent implements OnInit {
  articleCommande: ArticleCommande = new ArticleCommande();
  articleCommandes: ArticleCommande[] = new Array<ArticleCommande>();
  id: any;
  formModified: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private articleCommandeService: ArticleCommandeService, 
        public confirmService: NgConfirmService) {
  }

  ngOnInit(): void {
    
    const articleCommandeId  = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleCommandeService.findAll().subscribe(data => {
      this.articleCommandes = data;
      if (articleCommandeId) {
        this.id = +articleCommandeId;
        this.applyFilter();
      }
    });
  }

  applyFilter(){
    const result = this.articleCommandes.filter(x => x.id === this.id);
    if (result) {
      this.articleCommande = result[0];
    }
  }

  modifierArticleCommande() {
    this.formModified = true;
  }

  supprimerArticleCommande() {
    this.confirmService.showConfirm("Etes-vous sûr de supprimer l'articleCommande d'id  " + this.articleCommande.id + " ?",
     () => {
    this.articleCommandeService.deleteArticleCommande(this.articleCommande).subscribe(result => this.goToArticleCommandeList());

    },
    () => {
      this.goToArticleCommandeList();
    })
    
  }

  goToArticleCommandeList() {
    this.router.navigate(['/articleCommandes']);
  }
}
