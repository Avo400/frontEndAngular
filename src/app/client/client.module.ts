import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule } from '@angular/forms';
import { ClientViewComponent } from './client-view/client-view.component';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientFormComponent,
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    
  ]
})
export class ClientModule { }
