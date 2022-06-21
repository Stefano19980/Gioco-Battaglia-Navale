import { Component, OnInit } from '@angular/core';
import { GiocoService } from '../gioco.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent{


 

  constructor(public gservice: GiocoService) { }




  getTrovaNave (nave:string, index:number) {
    this.gservice.trovaNave(nave, index)
   
  }



  getMostraElemento () {
    this.gservice.MostraElemento()
  
}


getShow() {
  return this.gservice.show;
}

getColArray() {
  return this.gservice.colArray;
}

getRowArray() {
  return this.gservice.rowArray;
}

getTentativi() {
  return this.gservice.tentativi;

}



}
