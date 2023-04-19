import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private articlesUrl: string;
  private article: Article = new Article();

  constructor(private http: HttpClient) {
    this.articlesUrl = 'http://localhost:8080/articles'; 
  }

  public findAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
    
  }

  public addArticle(article: Article) {
    return this.http.post<Article>(this.articlesUrl, article);
  }
 
  public getArticle() {
    return this.article;
  }
  
  public updateArticle(article: Article) {
    return this.http.put<Article>(this.articlesUrl, article);
  }

  public deleteArticle(article: Article){
    return this.http.delete<Article>(this.articlesUrl, {body: article});

  }
}
