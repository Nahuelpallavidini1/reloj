import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  today = 0; //Variable numérica que va a contener Fecha y Hora

  constructor() {
    this.today = Date.now; //Asigna Fecha Actual
  }

  ngOnInit() {
    //Genera la actualización de la variable cada 1000 milisegundos

    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
