import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';
import { Client } from 'src/app/client/Client';
import { ClientService } from 'src/app/client/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {
  @Input() weAreFromPasserCommande: Boolean = false;

  @Input() commande: Commande = new Commande();
  @Output() eventMostRecentCommandeId = new EventEmitter<number>();
  @Output() eventMostRecentCommande = new EventEmitter<Commande>();
  selectedClient = new Client();
  selectedClientId: number = 0;
  clients: Client[] = [];
  
  mostRecentCommandeId: number = 0;
  public selected: Client = new Client;
  modeUpdate: boolean = false;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private commandeService: CommandeService,
        private clientService : ClientService) {
    
  }


  ngOnInit(): void {
    this.commandeService.isCommandeInserted = false;

    this.modeUpdate = (+this.commande.id>0);
    if (this.modeUpdate) {
      this.selectedClient = this.commande.client;
      this.selectedClientId = this.commande.client.id;
    } else
    {
      this.selectedClient = new Client();
    }
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
      
    })
  }

  onClientChange(value: any){
    alert(JSON.stringify(value)); // garder ce code afin de debugguer
  }
  onSubmit() {
    if (this.modeUpdate) {
      this.commandeService.updateCommande(this.commande).subscribe(result => this.goToCommandeList());
    } else {
      this.commandeService.addCommande(this.commande).subscribe(result => this.goToCommandeList());
    }
  }

  goToCommandeList() {
    this.router.navigate(['/commandes']);
  }

  /* addCommande(){
    this.commandeService.addCommande(this.commande).subscribe((id: any) => {
      console.log("commandeForm.ts addCommande: id=" + id);
      this.eventMostRecentCommandeId.emit(id);
      this.commandeService.setInsertedCommande(true);
    } );
  
  } */

  addCommandeWithGetCommande() {
    this.commandeService.postCommandeAndGetCommande(this.commande).subscribe((commande) => {
      console.log("commandeForm.ts addCommande commande=" + commande);
      this.eventMostRecentCommande.emit(commande);
      this.commandeService.setInsertedCommande(true);
    
    } );
   
  }


}
