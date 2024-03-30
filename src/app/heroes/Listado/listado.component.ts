import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['spiderman','Ironman','Hulk','Hawkeye','Thor']
  heroeBorrado: string = "";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
