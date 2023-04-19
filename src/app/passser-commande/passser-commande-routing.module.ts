import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasserCommandeFormComponent } from './passer-commande-form/passer-commande-form.component';


const routes: Routes = [{ path: '', component: PasserCommandeFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassserCommandeRoutingModule { }
