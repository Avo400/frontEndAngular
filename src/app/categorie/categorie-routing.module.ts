import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';
import { CategorieViewComponent } from './categorie-view/categorie-view.component';


const routes: Routes = [{ path: '', component: CategorieListComponent },
{ path: 'add', component: CategorieFormComponent },
{ path: 'categorie', component: CategorieFormComponent },
{ path: ':id', component: CategorieViewComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
