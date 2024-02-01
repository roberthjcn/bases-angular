import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public herosNames: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public deleteHero?: string = "";

  removeLastHero () :void{
    this.deleteHero = this.herosNames.pop();
    
  }

}
