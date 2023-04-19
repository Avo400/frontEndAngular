import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../Categorie';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  categories: Categorie[] = []
  constructor(private categorieService: CategorieService) { 
    
  }

  ngOnInit() {
    this.categorieService.findAll().subscribe(data => {
      this.categories = data;
    })
  }

}
