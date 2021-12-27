import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

    heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
    //heroe: string|undefined = ' ';
    heroe: string = '';

    borrarHeroe(){
      this.heroe  = this.heroes.pop() || '';

    }


}
