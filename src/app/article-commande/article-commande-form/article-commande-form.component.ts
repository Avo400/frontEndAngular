import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleCommande } from '../ArticleCommande';
import { ArticleCommandeService } from '../articleCommande.service';
import { Article } from 'src/app/article/Article';
import { ArticleService } from 'src/app/article/article.service';
import { CommandeService } from 'src/app/commande/commande.service';
import { Commande } from 'src/app/commande/Commande';
import { NgConfirmService } from 'ng-confirm-box';


@Component({
  selector: 'app-articleCommande-form',
  templateUrl: './article-commande-form.component.html',
  styleUrls: ['./article-commande-form.component.css']
})
export class ArticleCommandeFormComponent implements OnInit {
  @Input() articleCommande: ArticleCommande = new ArticleCommande();
  modeUpdate: boolean = false;
  articles : Article[] = [];
  commandes: Commande[] = [];
  @Input() weAreFromPasserCommande: Boolean = false;
  
  @Input() createdCommande: Commande = new Commande();
  @Output() isStillNewArticleCommandeToAdd = new EventEmitter<boolean>();

  selectedArticle = new Article();
  selectedArticleId: number = 0;
  commandeId: number = 0;
  commandeIdFromRoute: any;

  selectedCommande = new Commande();
  selectedCommandeId: number = 0;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private articleCommandeService: ArticleCommandeService,
        private articleService : ArticleService,
        private commandeService : CommandeService,
        public confirmService: NgConfirmService) {
    
  }
  ngOnInit(): void {
    this.modeUpdate = (+this.articleCommande.id>0);
    if (this.modeUpdate) {
      this.selectedArticle = this.articleCommande.article;
      this.selectedArticleId = this.articleCommande.article.id;

      this.selectedCommande = this.articleCommande.commande;
      this.selectedCommandeId = this.articleCommande.commande.id;
    } else
    {
      this.selectedArticle= new Article();
      this.selectedCommande = new Commande();
      this.getCommandeIdFromRoute();
      
    }
    this.articleService.findAll().subscribe(data => {
      this.articles = data;
      
    })

    this.commandeService.findAll().subscribe(data => {
      this.commandes = data;
      
    })
  }

  supprimerCommande() {
    this.confirmService.showConfirm("Etes-vous sûr d'annuler la saisie d'article ? Cela entraîne la suppression de la commande en cours.",
     () => {
    //this.commandeService.deleteCommande(this.commande).subscribe(result => this.goToCommandeList());

    },
    () => {
      //this.goToCommandeList();
    })
  }

  onArticleChange(value: any){
    alert(JSON.stringify(value)); // garder ce code afin de debugguer
  }

  onSubmit() {
    if(this.weAreFromPasserCommande) {
      this.articleCommande.commande = this.createdCommande;
      this.articleCommandeService.addArticleCommande(this.articleCommande).subscribe(result => this.goToArticleCommandeList());
      
    } else {
        if (this.modeUpdate) {
        this.articleCommandeService.updateArticleCommande(this.articleCommande).subscribe(result => this.goToArticleCommandeList());
      } else {
        this.articleCommandeService.addArticleCommande(this.articleCommande).subscribe(result => this.goToArticleCommandeList());
      }
    }
   
  }
  addObjectArticleCommande() {
    this.articleCommandeService.addArticleCommande(this.articleCommande).subscribe(result => 
      
      this.goBackToArticleCommandeForm());

  }
  goBackToArticleCommandeForm() {
    this.commandeId = this.articleCommande.commande.id;
    this.articleCommande = new ArticleCommande();
    this.isStillNewArticleCommandeToAdd.emit(true);
     
      }

  getCommandeIdFromRoute() {
    if (( this.activatedRoute.snapshot.paramMap.get('id') !== null) && ( this.activatedRoute.snapshot.paramMap.get('id') !== undefined)) {
      this.commandeIdFromRoute = this.activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.commandeIdFromRoute = null;
    }
    
    
  }

  goToArticleCommandeList() {
    this.router.navigate(['/articleCommandes']);
  }
}
