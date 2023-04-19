import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdresseRoutingModule } from './adresse-routing.module';

import { AdresseListComponent } from './adresse-list/adresse-list.component';
import { AdresseViewComponent } from './adresse-view/adresse-view.component';
import { AdresseFormComponent } from './adresse-form/adresse-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      AdresseListComponent,
    AdresseViewComponent,
    AdresseFormComponent
  ],
  imports: [
    CommonModule,
    AdresseRoutingModule,
    FormsModule
  ]
})
export class AdresseModule { }
