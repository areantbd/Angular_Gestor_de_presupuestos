import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent {
  cantidad: number
  cantidadError: boolean

  constructor( private _presupuestoService: PresupuestoService, private router: Router) {
    this.cantidad = 0,
    this.cantidadError = false
  }

  validate() {
    if (this.cantidad > 0) {
      this.cantidadError = false
      this._presupuestoService.presupuesto = this.cantidad
      this._presupuestoService.restante = this.cantidad
      this.router.navigate(['/gastos'])
      this.router
    } else {
      this.cantidadError = true
    }
  }
  
}
