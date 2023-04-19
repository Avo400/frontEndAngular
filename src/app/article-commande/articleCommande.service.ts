import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleCommande } from './ArticleCommande';


@Injectable({
  providedIn: 'root'
})

export class ArticleCommandeService {

  private articleCommandesUrl: string;
  private articleCommande: ArticleCommande = new ArticleCommande();

  constructor(private http: HttpClient) {
    this.articleCommandesUrl = 'http://localhost:8080/articleCommandes'; 
  }

  public findAll(): Observable<ArticleCommande[]> {
    return this.http.get<ArticleCommande[]>(this.articleCommandesUrl);
    
  }

  public addArticleCommande(articleCommande: ArticleCommande) {
    return this.http.post<ArticleCommande>(this.articleCommandesUrl, articleCommande);
  }
 
  public getArticleCommande() {
    return this.articleCommande;
  }
  
  public updateArticleCommande(articleCommande: ArticleCommande) {
    return this.http.put<ArticleCommande>(this.articleCommandesUrl, articleCommande);
  }

  public deleteArticleCommande(articleCommande: ArticleCommande){
    return this.http.delete<ArticleCommande>(this.articleCommandesUrl, {body: articleCommande});

  }
}
