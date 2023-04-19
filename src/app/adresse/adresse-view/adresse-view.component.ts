import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Adresse } from '../Adresse';
import { AdresseService } from '../adresse.service';

@Component({
  selector: 'app-adresse-view',
  templateUrl: './adresse-view.component.html',
  styleUrls: ['./adresse-view.component.css']
})
export class AdresseViewComponent implements OnInit {
  adresse: Adresse = new Adresse();
  adresses: Adresse[] = new Array<Adresse>();
  id: any;
  formModified: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private adresseService: AdresseService, 
        public confirmService: NgConfirmService) {
  }

  ngOnInit(): void {
    
    const adresseId  = this.activatedRoute.snapshot.paramMap.get('id');
    this.adresseService.findAll().subscribe(data => {
      this.adresses = data;
      if (adresseId) {
        this.id = +adresseId;
        this.applyFilter();
      }
    });
  }

  applyFilter(){
    const result = this.adresses.filter(x => x.id === this.id);
    if (result) {
      this.adresse = result[0];
    }
  }

  modifierAdresse() {
    this.formModified = true;
  }

  supprimerAdresse() {
    this.confirmService.showConfirm("Etes-vous sûr de supprimer " + this.adresse.rue + " ?",
     () => {
    this.adresseService.deleteAdresse(this.adresse).subscribe(result => this.goToAdresseList());

    },
    () => {
      this.goToAdresseList();
    })
    
  }

  goToAdresseList() {
    this.router.navigate(['/adresses']);
  }
}
