import { Component, OnInit } from '@angular/core';
import { GiocoService } from 'src/app/gioco.service';

@Component({
  selector: 'app-esito-partita',
  templateUrl: './esito-partita.component.html',
  styleUrls: ['./esito-partita.component.css']
})
export class EsitoPartitaComponent{

  constructor(public gservice:GiocoService ) { }

  getVittoria () {
    return this.gservice.vittoria;
  }
  
  getSconfitta() {
  return this.gservice.sconfitta;
  }

  getReset() {
    this.gservice.reset();
  }

  

}
