import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [{ path: '', component: ArticleListComponent },
  { path: 'add', component: ArticleFormComponent },
  { path: 'article', component: ArticleFormComponent },
  { path: ':id', component: ArticleViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
