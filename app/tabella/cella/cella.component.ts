import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GiocoService } from 'src/app/gioco.service';

@Component({
  selector: 'app-cella',
  templateUrl: './cella.component.html',
  styleUrls: ['./cella.component.css']
})
export class CellaComponent {

  @Input() nomeCella = '';

  
  @Input() valoreCella: string = '';

  @Output() onValoreEmesso: EventEmitter<string> = new EventEmitter<string>();


  dirty=false;

  disabilita: boolean = false;



  constructor(public gservice:GiocoService) { }

  getColor(): string | null {
    return this.dirty ? (this.gservice.affondata[this.nomeCella] ? 'red' : 'blue') : null;
  }
  

  

  tabella(): void {
    this.dirty = true;
    this.disabilita = true;
    this.onValoreEmesso.emit(this.valoreCella)



  }





}
