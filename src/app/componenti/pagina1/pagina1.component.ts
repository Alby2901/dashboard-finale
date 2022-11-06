import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ServizioDatiElementiService } from '../../servizi/servizio-dati-elementi.service';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})

export class Pagina1Component implements OnInit {
  // dataSource viene utilizzata nella tabella
  // e riceve i dati dal servizio "serviziodatielementi"
  dataSourceLoc = this.serviziodatielementi.dataSource;
  dataSourceLocDB:any

  mesg: any

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['name', 'symbol'];

  constructor(private serviziodatielementi: ServizioDatiElementiService,
              private firebaseDB: FirebaseService) { }

  ngOnInit(): void {
    console.log('dataSourceLoc: ', this.dataSourceLoc);

    this.firebaseDB.leggiTabellaDB('elementi').subscribe( data => {
      console.log('data: ' + data)
      if (data){
        this.dataSourceLocDB = data;
        this.dataSourceLocDB = Object.keys(this.dataSourceLocDB).map( (key) => {
        this.dataSourceLocDB[key]['id'] = key;
        return this.dataSourceLocDB[key];
        });
      }else{
        this.dataSourceLocDB = ''
      }

      console.log('dataSourceLocDB1: ', this.dataSourceLocDB)
    })
    console.log('dataSourceLocDB2: ', this.dataSourceLocDB)
  }

  controllo(){
    console.log('dataSourceLocDB3: ' + this.dataSourceLocDB)
    // console.log('dataSourceLocDB4: ' + this.dataSourceLocDB)
  }

  inserisciElemento(){
    this.firebaseDB.inserisciElementoDB(
      'elementi',
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' }
    ).subscribe( (data) => {
      console.log(data);
    })
  }

  riempiTabella(){
      this.serviziodatielementi.dataSource.forEach( element => {
        this.firebaseDB.inserisciElementoDB(
          'elementi',
          element
        ).subscribe( (data) => {
          console.log(data);
        })
      });
      console.log('pippo');
  }

  EliminaTabella(){
      this.mesg = this.firebaseDB.eliminaTabella(
        'elementi').subscribe( (data) => {
        console.log(data);
      });
      console.log('messaggio di ritorno', this.mesg);
  }

}
