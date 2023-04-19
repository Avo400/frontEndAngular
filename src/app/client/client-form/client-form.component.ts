import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Client';
import { ClientService } from '../client.service';
import { Adresse } from 'src/app/adresse/Adresse';
import { AdresseService } from 'src/app/adresse/adresse.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  @Input() client: Client = new Client();
  selectedAdresse = new Adresse();
  selectedAdresseId: number = 0;
  adresses: Adresse[] = [];
  
  public selected: Adresse = new Adresse;
  modeUpdate: boolean = false;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private clientService: ClientService,
        private adresseService : AdresseService) {
    
  }


  ngOnInit(): void {
    this.modeUpdate = (+this.client.id>0);
    if (this.modeUpdate) {
      this.selectedAdresse = this.client.adresse;
      this.selectedAdresseId = this.client.adresse.id;
    } else
    {
      this.selectedAdresse = new Adresse();
    }
    this.adresseService.findAll().subscribe(data => {
      this.adresses = data;
      
    })
  }
  onAdresseChange(value: any){
    alert(JSON.stringify(value)); // garder ce code afin de debugguer
  }
  onSubmit() {
    if (this.modeUpdate) {
      this.clientService.updateClient(this.client).subscribe(result => this.goToClientList());
    } else {
      this.clientService.addClient(this.client).subscribe(result => this.goToClientList());
    }
  }

  goToClientList() {
    this.router.navigate(['/clients']);
  }

}
