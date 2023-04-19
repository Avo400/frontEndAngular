import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from './Categorie';


@Injectable({
  providedIn: 'root'
})

export class CategorieService {

  private categoriesUrl: string;
  private categorie: Categorie = new Categorie();

  constructor(private http: HttpClient) {
    this.categoriesUrl = 'http://localhost:8080/categories'; 
  }

  public findAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.categoriesUrl);
    
  }

  public addCategorie(categorie: Categorie) {
    return this.http.post<Categorie>(this.categoriesUrl, categorie);
  }
 
  public getCategorie() {
    return this.categorie;
  }
  
  public updateCategorie(categorie: Categorie) {
    return this.http.put<Categorie>(this.categoriesUrl, categorie);
  }

  public deleteCategorie(categorie: Categorie){
    return this.http.delete<Categorie>(this.categoriesUrl, {body: categorie});

  }
}
