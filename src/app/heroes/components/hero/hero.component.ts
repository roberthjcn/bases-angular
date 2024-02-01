import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 20;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

   changeHero():void{
    console.log("AQUI");
    this.name = "spiderman";
  }

  changeAge():void{
    this.age = 22;
  }
  
  resetValues (){
    this.age=20;
    this.name="ironman";
  }
}
