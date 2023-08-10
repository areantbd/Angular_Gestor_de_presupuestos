import { Component } from '@angular/core';

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

  constructor() {
    this.tipoGasto = ""
    this.cantidad = 0
    this.formularioIncorrecto = false
    this.textoIncorrecto = "Formulario incorrecto"
  }

  anadirGasto(): void {
    if (this.tipoGasto == "" || this.cantidad <= 0){
      this.formularioIncorrecto = true
    } else {
      this.formularioIncorrecto = false
      this.tipoGasto = ""
      this.cantidad = 0
    }
  }

}
