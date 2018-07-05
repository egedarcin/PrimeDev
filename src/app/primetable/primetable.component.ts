import {Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Message} from 'primeng/api';

import {ConfirmationService} from 'primeng/api';

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
  msgs: Message[] = [];

  constructor(private heroService: HeroService,
              private confirmationService: ConfirmationService) { }

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
  save(): void {
    this.heroService.updateHero(this.selectedHero)
      .subscribe();
  }

  showDialogToDisp() {
    if (!this.selectedHero) {
      this.displayDialogDisp = true;
    }
  }

  confirm(hero: Hero): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the hero?',
      header: 'Confirmation of Deletion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(hero);
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Hero Deleted.'}];
      },
      reject: () => {
        this.msgs = [{severity: 'warn', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

}
