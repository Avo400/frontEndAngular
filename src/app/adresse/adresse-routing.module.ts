import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseListComponent } from './adresse-list/adresse-list.component';
import { AdresseFormComponent } from './adresse-form/adresse-form.component';
import { AdresseViewComponent } from './adresse-view/adresse-view.component';

const routes: Routes = [{ path: '', component: AdresseListComponent },
  { path: 'add', component: AdresseFormComponent },
  { path: 'adresse', component: AdresseFormComponent },
  { path: ':id', component: AdresseViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdresseRoutingModule { }
