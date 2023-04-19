import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../Categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {
  @Input() categorie: Categorie = new Categorie();
  modeUpdate: boolean = false;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private categorieService: CategorieService) {
    
  }
  ngOnInit(): void {
    this.modeUpdate = (+this.categorie.id>0);
  }

  onSubmit() {
    if (this.modeUpdate) {
      this.categorieService.updateCategorie(this.categorie).subscribe(result => this.goToCategorieList());
    } else {
      this.categorieService.addCategorie(this.categorie).subscribe(result => this.goToCategorieList());
    }
  }

  goToCategorieList() {
    this.router.navigate(['/categories']);
  }
}
