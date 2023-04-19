import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCommandeListComponent } from './article-commande-list/article-commande-list.component';
import { ArticleCommandeFormComponent } from './article-commande-form/article-commande-form.component';
import { ArticleCommandeRoutingModule } from './articleCommande-routing.module';
import { FormsModule } from '@angular/forms';
import { ArticleCommandeViewComponent } from './article-commande-view/article-commande-view.component';



@NgModule({
  declarations: [
    ArticleCommandeListComponent,
    ArticleCommandeFormComponent,
    ArticleCommandeViewComponent
  ],
  imports: [
    CommonModule,
    ArticleCommandeRoutingModule,
    FormsModule
  ],
  exports: [
    ArticleCommandeFormComponent
  ]
})
export class ArticleCommandeModule { }
