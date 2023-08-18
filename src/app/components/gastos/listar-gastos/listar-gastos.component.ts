import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnDestroy, OnInit {

  subscription: Subscription
  presupuesto: number
  resto: number
  gastos: any[]

  constructor (private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0
    this.resto = 0
    this.gastos = []
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      this.resto = this.resto - data.cantidad
      this.gastos.push(data)
      console.log(this.gastos)
    })
  }
  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto
    this.resto = this._presupuestoService.restante
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    throw new Error('Method not implemented.');
  }
}
