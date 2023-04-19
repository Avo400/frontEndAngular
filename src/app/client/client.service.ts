import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './Client';


@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private clientsUrl: string;
  private client: Client = new Client();

  constructor(private http: HttpClient) {
    this.clientsUrl = 'http://localhost:8080/clients'; 
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
    
  }

  public addClient(client: Client) {
    return this.http.post<Client>(this.clientsUrl, client);
  }
 
  public getClient() {
    return this.client;
  }
  
  public updateClient(client: Client) {
    return this.http.put<Client>(this.clientsUrl, client);
  }

  public deleteClient(client: Client){
    return this.http.delete<Client>(this.clientsUrl, {body: client});

  }
}
