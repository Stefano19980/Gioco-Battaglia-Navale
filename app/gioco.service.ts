import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiocoService {

  tentativi:number = 0;

  show: boolean = false;

  index:number = 0;

  cella: string = '';

  colArray: string[] = ['A','B','C','D','E','F','G','H'];
  rowArray: number[]= [1,2,3,4,5,6,7,8];

  affondata: any = {};
  colpito: string[] = ['A8','B8','C8','D8','E8','D1','D2','D3','D4','C5','D5','E5','G3','G4','D7']

  vittoria: boolean = false;
  sconfitta: boolean = false;
  punteggio = 0;

  constructor() { }

  generaNave (nave:string, index:number) {
    return nave + (index);

  }

  trovaNave (nave:string, index:number) {
   this.cella = this.generaNave(nave, index);
   
   if (this.colpito.includes(this.cella)) {
    this.affondata[this.cella] = true;
    this.punteggio++;
   }
    this.tentativi++;
    this.finePartita();
  

  }

  finePartita () {
    if (this.punteggio === 15){
      this.vittoria = true;
    }
    else if (this.tentativi == 30){
      this.sconfitta = true;
    }
  }



MostraElemento () {
  this.show = !this.show
}

reset() {
  this.show = false;
  this.tentativi = 0;
  this.vittoria = false;
  this.sconfitta = false;
  this.punteggio = 0;
}




}


