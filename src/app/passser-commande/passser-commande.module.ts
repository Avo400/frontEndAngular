import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassserCommandeRoutingModule } from './passser-commande-routing.module';

import { PasserCommandeFormComponent } from './passer-commande-form/passer-commande-form.component';

import { CommandeModule } from '../commande/commande.module';
import { ArticleCommande } from '../article-commande/ArticleCommande';
import { ArticleCommandeModule } from '../article-commande/article-commande.module';


@NgModule({
  declarations: [
       PasserCommandeFormComponent
      
  ],
  imports: [
    CommonModule,
    PassserCommandeRoutingModule,
    CommandeModule,
    ArticleCommandeModule
    
  ]
})
export class PassserCommandeModule { }
