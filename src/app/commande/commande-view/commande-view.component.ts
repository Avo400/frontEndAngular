import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-commande-view',
  templateUrl: './commande-view.component.html',
  styleUrls: ['./commande-view.component.css']
})
export class CommandeViewComponent implements OnInit {
  commande: Commande = new Commande();
  commandes: Commande[] = new Array<Commande>();
  id: any;
  formModified: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private commandeService: CommandeService, 
        public confirmService: NgConfirmService) {
  }

  ngOnInit(): void {
    
    const commandeId  = this.activatedRoute.snapshot.paramMap.get('id');
    this.commandeService.findAll().subscribe(data => {
      this.commandes = data;
      if (commandeId) {
        this.id = +commandeId;
        this.applyFilter();
      }
    });
  }

  applyFilter(){
    const result = this.commandes.filter(x => x.id === this.id);
    if (result) {
      this.commande = result[0];
    }
  }

  modifierCommande() {
    this.formModified = true;
  }

  supprimerCommande() {
    this.confirmService.showConfirm("Etes-vous sûr de supprimer la commande n° " + this.commande.numeroCommande + " ?",
     () => {
    this.commandeService.deleteCommande(this.commande).subscribe(result => this.goToCommandeList());

    },
    () => {
      this.goToCommandeList();
    })
    
  }

  goToCommandeList() {
    this.router.navigate(['/commandes']);
  }
}
