import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  presupuestoTotal: number
  restanteTotal: number



  constructor( private _presupuestoService: PresupuestoService, private router: Router) {
    this.presupuestoTotal = this._presupuestoService.presupuesto
    this.restanteTotal = _presupuestoService.restante
  }

  ngOnInit(): void {
    if (this.presupuestoTotal === 0) {
      this.router.navigate(['/presupuesto'])
    }
  }

}
