import { Component, OnInit } from '@angular/core';
import { ArticleCommande } from '../ArticleCommande';
import { ArticleCommandeService } from '../articleCommande.service';

@Component({
  selector: 'app-articleCommande-list',
  templateUrl: './article-commande-list.component.html',
  styleUrls: ['./article-commande-list.component.css']
})
export class ArticleCommandeListComponent implements OnInit {
  articleCommandes: ArticleCommande[] = [];
  constructor(private articleCommandeService: ArticleCommandeService) { }

  ngOnInit() {
    this.articleCommandeService.findAll().subscribe(data => {
      this.articleCommandes = data;
    })
  }

}
