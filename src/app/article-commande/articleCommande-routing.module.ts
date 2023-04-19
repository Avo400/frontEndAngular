import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCommandeListComponent } from './article-commande-list/article-commande-list.component';
import { ArticleCommandeFormComponent } from './article-commande-form/article-commande-form.component';
import { ArticleCommandeViewComponent } from './article-commande-view/article-commande-view.component';


const routes: Routes = [{ path: '', component: ArticleCommandeListComponent },
  { path: 'add', component: ArticleCommandeFormComponent },
  { path: 'adresse', component: ArticleCommandeFormComponent },
  { path: ':id', component: ArticleCommandeViewComponent },
 ];
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleCommandeRoutingModule { }
