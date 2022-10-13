import { Injectable } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

// const ELEMENT_DATA2: {} =
//   { position: '1', dati: {name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//    position: '2', dati: {name: 'Helium', weight: 4.0026, symbol: 'He' },
//    position: '3', dati: {name: 'Lithium', weight: 6.941, symbol: 'Li' },
//    position: '4', dati: {name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//    position: '5', dati: {name: 'Boron', weight: 10.811, symbol: 'B' },
//    position: '6', dati: {name: 'Carbon', weight: 12.0107, symbol: 'C' },
//    position: '7', dati: {name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//    position: '8', dati: {name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//    position: '9', dati: {name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//    position: '10', dati: {name: 'Neon', weight: 20.1797, symbol: 'Ne' }
//   };


@Injectable({
  providedIn: 'root',
})
export class ServizioDatiElementiService {
  dataSource = ELEMENT_DATA;
  constructor() {}
}
