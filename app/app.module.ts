import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { HeaderComponent } from './header/header.component';
import { CellaComponent } from './tabella/cella/cella.component';
import { EsitoPartitaComponent } from './tabella/esito-partita/esito-partita.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    HeaderComponent,
    CellaComponent,
    EsitoPartitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
