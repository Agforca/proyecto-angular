import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FirstCardComponent } from './componentes/first-card/first-card.component';
import { SecondCardComponent } from './componentes/second-card/second-card.component';
import { ThirdCardComponent } from './componentes/third-card/third-card.component';
import { FourthCardComponent } from './componentes/fourth-card/fourth-card.component';
import { FifthCardComponent } from './componentes/fifth-card/fifth-card.component';
import { SixthCardComponent } from './componentes/sixth-card/sixth-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FirstCardComponent,
    SecondCardComponent,
    ThirdCardComponent,
    FourthCardComponent,
    FifthCardComponent,
    SixthCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
