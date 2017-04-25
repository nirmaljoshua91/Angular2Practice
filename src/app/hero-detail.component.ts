import { Component,Input } from '@angular/core';
import {Hero} from './hero.cls';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.tpl.html'
,
})    

export class HeroDetailComponent  { 
 
@Input() hero: Hero;



}
