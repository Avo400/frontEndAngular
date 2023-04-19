import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'articles', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
  { path: 'adresses', loadChildren: () => import('./adresse/adresse.module').then(m => m.AdresseModule) },
  { path: 'categories', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
  { path: 'clients', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'commandes', loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule) },
    { path: 'passerCommandes', loadChildren: () => import('./passser-commande/passser-commande.module').then(m => m.PassserCommandeModule) },
    { path: 'articleCommandes', loadChildren: () => import('./article-commande/article-commande.module').then(m => m.ArticleCommandeModule) }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
