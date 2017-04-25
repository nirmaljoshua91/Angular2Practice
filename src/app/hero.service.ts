import {Injectable} from '@angular/core';
import {Hero} from './hero.cls';
import {HEROES} from './mockHeroes.cls'
@Injectable()
export class HeroService{
getHeroes():Hero[]{
    return HEROES;
}
}