import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CommandeFormComponent } from './commande-form/commande-form.component';
import { CommandeViewComponent } from './commande-view/commande-view.component';

const routes: Routes = [{ path: '', component: CommandeListComponent },
  { path: 'add', component: CommandeFormComponent },
  { path: 'commande', component: CommandeFormComponent },
  { path: ':id', component: CommandeViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
