import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adresse } from './Adresse';


@Injectable({
  providedIn: 'root'
})

export class AdresseService {

  private adressesUrl: string;
  private adresse: Adresse = new Adresse();

  constructor(private http: HttpClient) {
    this.adressesUrl = 'http://localhost:8080/adresses'; 
  }

  public findAll(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.adressesUrl);
    
  }

  public addAdresse(adresse: Adresse) {
    return this.http.post<Adresse>(this.adressesUrl, adresse);
  }
 
  public getAdresse() {
    return this.adresse;
  }
  
  public updateAdresse(adresse: Adresse) {
    return this.http.put<Adresse>(this.adressesUrl, adresse);
  }

  public deleteAdresse(adresse: Adresse){
    return this.http.delete<Adresse>(this.adressesUrl, {body: adresse});

  }
}
