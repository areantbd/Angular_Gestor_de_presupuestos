import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-sumar-gastos',
  templateUrl: './sumar-gastos.component.html',
  styleUrls: ['./sumar-gastos.component.css']
})
export class SumarGastosComponent {

  tipoGasto: string
  cantidad: number
  formularioIncorrecto: boolean
  textoIncorrecto: string


  constructor(private _presupuestoService: PresupuestoService) {
    this.tipoGasto = ""
    this.cantidad = 0
    this.formularioIncorrecto = false
    this.textoIncorrecto = ""
  }

  anadirGasto(): void {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true
      this.textoIncorrecto = "No tienes tanto dinero"
      return
    }


    if (this.tipoGasto == "" || this.cantidad <= 0){
      this.formularioIncorrecto = true
      this.textoIncorrecto = "Formulario incorrecto"
    } else {

      //Creamos objeto de gasto

      const GASTO = {
        nombre: this.tipoGasto,
        cantidad: this.cantidad
      }


      //Enviamos objeto a suscriptores via subject

      this._presupuestoService.agregarGasto(GASTO)

      //Reset formulario
      this.formularioIncorrecto = false
      this.tipoGasto = ""
      this.cantidad = 0
    }
  }

}
