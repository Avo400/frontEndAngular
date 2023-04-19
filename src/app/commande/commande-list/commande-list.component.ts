import { Component, OnInit } from '@angular/core';
import { Commande } from '../Commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  commandes: Commande[] = [];
  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
    this.commandeService.findAll().subscribe(data => {
      this.commandes = data;
    })
  }

}
