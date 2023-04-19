import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeViewComponent } from './commande-view/commande-view.component';
import { FormsModule } from '@angular/forms';
import { CommandeFormComponent } from './commande-form/commande-form.component';
import { CommandeListComponent } from './commande-list/commande-list.component';



@NgModule({
  declarations: [
   
  
    CommandeViewComponent,
           CommandeFormComponent,
           CommandeListComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    FormsModule
  ],
  exports: [
    CommandeFormComponent
  ]
})
export class CommandeModule { }
