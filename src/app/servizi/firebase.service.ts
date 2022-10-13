import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ServizioDatiElementiService } from './servizio-dati-elementi.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  id_progetto: string = 'dashboard-angular-c0194'
  urlDB_: string = `https://${this.id_progetto}.firebaseio.com/elementi.json`
  urlDB: string = `https://dashboard-angular-c0194-default-rtdb.europe-west1.firebasedatabase.app/`

  constructor(private http: HttpClient, private dati: ServizioDatiElementiService) { }

  inserisciElementoDB(tabella: string, body: {}){
      return this.http.post(`${this.urlDB}/${tabella}.json`, body)
  }

  leggiTabellaDB(tabella: string){
    return this.http.get(`${this.urlDB}/${tabella}.json`)
  }

  eliminaTabella(tabella: string){
    return this.http.delete(`${this.urlDB}/${tabella}.json`)
  }

}
