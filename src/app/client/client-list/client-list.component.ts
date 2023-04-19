import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
    })
  }

}
