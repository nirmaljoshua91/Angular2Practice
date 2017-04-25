import { Component,OnInit } from '@angular/core';
import {Hero} from './hero.cls';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.tpl.html',
  styleUrls:['app/app.styles.css'],
  providers:[HeroService]
})

export class AppComponent implements OnInit {

  // export class AppComponent  {
 title = 'Tour of Heroes';
  heroes: Hero[];
 selectedHero:Hero;
 constructor(private heroService:HeroService){};
 
  getHeroes():void{
  this.heroes=this.heroService.getHeroes();
}
ngOnInit():void{
  this.getHeroes();
}


onSelect(hero:Hero): void{
  this.selectedHero=hero;
}





}