import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Client } from '../Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  client: Client = new Client();
  clients: Client[] = new Array<Client>();
  id: any;
  formModified: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private clientService: ClientService, 
        public confirmService: NgConfirmService) {
  }

  ngOnInit(): void {
    
    const clientId  = this.activatedRoute.snapshot.paramMap.get('id');
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
      if (clientId) {
        this.id = +clientId;
        this.applyFilter();
      }
    });
  }

  applyFilter(){
    const result = this.clients.filter(x => x.id === this.id);
    if (result) {
      this.client = result[0];
    }
  }

  modifierClient() {
    this.formModified = true;
  }

  supprimerClient() {
    this.confirmService.showConfirm("Etes-vous sûr de supprimer " + this.client.name + " ?",
     () => {
    this.clientService.deleteClient(this.client).subscribe(result => this.goToClientList());

    },
    () => {
      this.goToClientList();
    })
    
  }

  goToClientList() {
    this.router.navigate(['/clients']);
  }
}
