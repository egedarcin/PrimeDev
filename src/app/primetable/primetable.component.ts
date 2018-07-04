import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-primetable',
  templateUrl: './primetable.component.html',
  styleUrls: ['./primetable.component.css']
})
export class PrimetableComponent implements OnInit {

  heroes: Hero[];
  displayDialog: boolean;
  selectedHero: Hero;
  newHero: boolean;
  msgs: Message[] = [];
  cols: any[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.cols = [
           { field: 'id', header: 'ID' },
           { field: 'name', header: 'Name' },
           { field: 'ability', header: 'Ability' }
     ];
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string, ability: string): void {
  name = name.trim();
  ability = ability.trim();
  if (!name || !ability ) { return; }
  this.heroService.addHero({ name, ability} as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
  }
  showDialogToAdd() {
    this.newHero = true;
    this.displayDialog = true;
  }
  /*
 onRowSelect(event) {
   this.newHero = false;
   this.Hero = this.cloneHero(event.data);
   this.displayDialog = true;
 }

 cloneHero(c: Hero): Hero {
   let car = {};
   for (let prop in c) {
     car[prop] = c[prop];
   }
   return car;
 }

 customSort(event: SortEvent) {
   event.data.sort((data1, data2) => {
     let value1 = data1[event.field];
     let value2 = data2[event.field];
     let result = null;

     if (value1 == null && value2 != null)
       result = -1;
     else if (value1 != null && value2 == null)
       result = 1;
     else if (value1 == null && value2 == null)
       result = 0;
     else if (typeof value1 === 'string' && typeof value2 === 'string')
       result = value1.localeCompare(value2);
     else
       result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

     return (event.order * result);
   });
 }
 */
}
