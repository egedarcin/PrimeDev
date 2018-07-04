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
  displayDialogAdd: boolean;
  displayDialogDisp: boolean;
  selectedHero: Hero;
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
    this.displayDialogAdd = true;
  }
  /*
  showDialogToDisp() {
    this.displayDialogDisp = true;
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe();
  }

  getHero(): void {

  }
  */
}
