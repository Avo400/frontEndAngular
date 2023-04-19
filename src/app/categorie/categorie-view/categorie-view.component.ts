import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Categorie } from '../Categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {
  categorie: Categorie = new Categorie();
  categories: Categorie[] = new Array<Categorie>();
  id: any;
  formModified: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
      private router: Router, 
        private categorieService: CategorieService, 
        public confirmService: NgConfirmService) {
  }

  ngOnInit(): void {
    
    const categorieId  = this.activatedRoute.snapshot.paramMap.get('id');
    this.categorieService.findAll().subscribe(data => {
      this.categories = data;
      if (categorieId) {
        this.id = +categorieId;
        this.applyFilter();
      }
    });
  }

  applyFilter(){
    const result = this.categories.filter(x => x.id === this.id);
    if (result) {
      this.categorie = result[0];
    }
  }

  modifierCategorie() {
    this.formModified = true;
  }

  supprimerCategorie() {
    this.confirmService.showConfirm("Etes-vous sûr de supprimer " + this.categorie.name + " ?",
     () => {
    this.categorieService.deleteCategorie(this.categorie).subscribe(result => this.goToCategorieList());

    },
    () => {
      this.goToCategorieList();
    })
    
  }

  goToCategorieList() {
    this.router.navigate(['/categories']);
  }
}
