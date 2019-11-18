import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre: string = "Alberto Jorge Perez Yañez";

  public array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public pi: number = Math.PI;
  public porcentaje: number = 0.245;

  public salario = 1234.5;
  public fecha = new Date();

  public persona = {
    nombre: 'beto',
    edad: 25,
    direccion: {
      calle: 'punta jade',
      casa: '109'
    }
  }

  public nombre2:string='AlBerTO jOrGE PereZ yAÑez'

  public activar:boolean=false;
  
  public video:string="A3Fi8kDGyo0";
 
}
