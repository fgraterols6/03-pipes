import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre    : string  = 'Fabiana';
    nombre2    : string  = 'fabIana gRAterol salaZAr';
    arreglo   : number[] = [1,2,3,4,5,6,7,8,9,10];
    nombres   : string[] = ['Andrea','Valeria','Fabiana','Maria','Fabiola', 'Paola'];
    PI        : number = Math.PI;
    porcentaje: number = 0.24545;
    salario   : number = 42153.3;
    fecha     : Date  = new Date();
    idioma    : string = 'es';
    activar   : boolean = true;

    videoUrl  : string = 'https://www.youtube.com/embed/e4rNoUQdfQY';

    valorPromesa = new Promise<string> ( (resolve) => {
      setTimeout(() => {
        resolve('llego la data')
      }, 4500)
    });

    heroe = {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 300,
      direccion: {
        calle: 'First Avenue',
        casa: 20
      }
    }

    changeLang( lang: string ) {
      this.idioma = lang;
    }
}
