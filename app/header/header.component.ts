import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GiocoService } from '../gioco.service';
import { CellaComponent } from '../tabella/cella/cella.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChildren(CellaComponent) cella? : QueryList<CellaComponent>


  constructor(public gservice: GiocoService) { }

  ngOnInit(): void {
  }

  reset() {
    this.cella
  }

}
