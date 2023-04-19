import { Component, OnInit } from '@angular/core';
import { Adresse } from '../Adresse';
import { AdresseService } from '../adresse.service';

@Component({
  selector: 'app-adresse-list',
  templateUrl: './adresse-list.component.html',
  styleUrls: ['./adresse-list.component.css']
})
export class AdresseListComponent implements OnInit {
  adresses: Adresse[] = [];
  constructor(private adresseService: AdresseService) { }

  ngOnInit() {
    this.adresseService.findAll().subscribe(data => {
      this.adresses = data;
    })
  }

}
