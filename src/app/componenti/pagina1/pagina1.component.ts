import { Component, OnInit } from '@angular/core';
import { ServizioDatiElementiService } from '../../servizi/servizio-dati-elementi.service';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})

export class Pagina1Component implements OnInit {
  // dataSource viene utilizzata nella tabella
  // e riceve i dati dal servizio "serviziodatielementi"
  dataSource = this.serviziodatielementi.dataSource;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(private serviziodatielementi: ServizioDatiElementiService) { }

  ngOnInit(): void {
    // console.log(this.serviziodatielementi.dataSource)
  }

}
