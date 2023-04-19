import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from './Commande';


@Injectable({
  providedIn: 'root'
})

export class CommandeService {

  private commandesUrl: string;
  private postCommandeAndGetCommandeUrl: string;
  private commande: Commande = new Commande();
  public isCommandeInserted: boolean = false;
  private internalMostRecentCommandeId: number = 0;

  constructor(private http: HttpClient) {
    this.commandesUrl = 'http://localhost:8080/commandes'; 
    this.postCommandeAndGetCommandeUrl = 'http://localhost:8080/postCommandeAndGetCommande';
  }

  public findAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.commandesUrl);
    
  }
 
  public addCommande(commande: Commande){
    return this.http.post<Commande>(this.commandesUrl, commande);
  }

  public getCommande() {
    return this.commande;
  }
  
  public updateCommande(commande: Commande) {
    return this.http.put<Commande>(this.commandesUrl, commande);
  }

  public deleteCommande(commande: Commande){
    return this.http.delete<Commande>(this.commandesUrl, {body: commande});

  }

  public getById(id: number): Observable<any> {
    let result: any;
    this.findAll().subscribe((commandes : Commande[]) => {
      const foundCommandes = commandes.filter(x => x.id === id);
      if (foundCommandes) {
        result =  foundCommandes[0];
      } 
    });
    return result;
  }

  public setMostRecentCommandeId(value: number){
    this.internalMostRecentCommandeId = value;
  }
  
  public getMostRecentCommandeId(): number {
    return this.internalMostRecentCommandeId;
  }

  setInsertedCommande(isCommandeInserted: boolean) {
    this.isCommandeInserted = isCommandeInserted;
  }

  public getMostRecentCommande(): Observable<any> {
    return this.getById(this.getMostRecentCommandeId());
  }

  public postCommandeAndGetCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(this.postCommandeAndGetCommandeUrl, commande);

  }
}
