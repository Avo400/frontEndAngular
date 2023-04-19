import {  Component, OnInit } from '@angular/core';
import { ArticleCommandeService } from 'src/app/article-commande/articleCommande.service';
import { Commande } from 'src/app/commande/Commande';
import { ArticleCommande } from 'src/app/article-commande/ArticleCommande';
import { CommandeService } from 'src/app/commande/commande.service';

@Component({
  selector: 'app-passer-commande-form',
  templateUrl: './passer-commande-form.component.html',
  styleUrls: ['./passer-commande-form.component.css']
})
export class PasserCommandeFormComponent implements OnInit {
  commandeId: number = 0;
   weAreFromPasserCommande: boolean = true;
  isSuivantButtonClicked: Boolean = false;
  createdCommande: Commande = new Commande();
  isNewArticleCommandeToAdd: boolean = true;

  constructor(public commandeService: CommandeService, public articleCommandeService: ArticleCommandeService) { }
 
  ngOnInit(): void {
    this.commandeService.setInsertedCommande(false);
  }
 
  getMostRecentInsertedCommande(event: any) {
    console.log("PasserCommandeForme getMostRecentInsertedCommande: event  commande= "+JSON.stringify(event));
    this.createdCommande = event;
  } 
  switchIsNewArticleCommandeToAdd(value: boolean) {
    this.isNewArticleCommandeToAdd = value;
    
  }
 
}
