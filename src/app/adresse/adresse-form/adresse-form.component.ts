import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from '../Adresse';
import { AdresseService } from '../adresse.service';

@Component({
  selector: 'app-adresse-form',
  templateUrl: './adresse-form.component.html',
  styleUrls: ['./adresse-form.component.css']
})
export class AdresseFormComponent implements OnInit {
  @Input() adresse: Adresse = new Adresse();
  modeUpdate: boolean = false;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private adresseService: AdresseService) {
    
  }
  ngOnInit(): void {
    this.modeUpdate = (+this.adresse.id>0);
  }

  onSubmit() {
    if (this.modeUpdate) {
      this.adresseService.updateAdresse(this.adresse).subscribe(result => this.goToAdresseList());
    } else {
      this.adresseService.addAdresse(this.adresse).subscribe(result => this.goToAdresseList());
    }
  }

  goToAdresseList() {
    this.router.navigate(['/adresses']);
  }
}
