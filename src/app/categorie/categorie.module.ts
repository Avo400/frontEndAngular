import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { FormsModule } from '@angular/forms';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';
import { CategorieViewComponent } from './categorie-view/categorie-view.component';


@NgModule({
  declarations: [
    CategorieListComponent,
    CategorieFormComponent,
    CategorieViewComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule
  ]
})
export class CategorieModule { }
