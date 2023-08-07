import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//components
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {path: "", redirectTo: "/presupuesto", pathMatch: "full"},
  {path: "presupuesto", component: PresupuestoComponent},
  {path: "gastos", component: GastosComponent},
  {path: "**", redirectTo: "/presupuesto", pathMatch: "full"},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
