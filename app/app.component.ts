import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})





export class AppComponent {
  title = 'battaglia-navale';

  @ViewChild(HeaderComponent) header?: HeaderComponent;

reset(){
  this.header?.reset();
}
}


