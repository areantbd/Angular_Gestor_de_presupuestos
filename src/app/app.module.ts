import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { SumarGastosComponent } from './components/gastos/sumar-gastos/sumar-gastos.component';
import { ListarGastosComponent } from './components/gastos/listar-gastos/listar-gastos.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    PresupuestoComponent,
    SumarGastosComponent,
    ListarGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
