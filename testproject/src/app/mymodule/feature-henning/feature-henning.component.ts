import { Component, OnInit } from '@angular/core';

export interface SuperHero {
  name: string;
  realname: string;
  powers: string;
}

const SuperHero_Data: SuperHero[] = [
  {name: "Batman", realname: "Bruce Wayne", powers: "Money"},
  {name: "Superman", realname: "Clark Kent", powers: "Cryptonian Powers"},
  {name: "Wonder Woman", realname: "Diana Prince", powers: "Amazone Powers"},
  {name: "The Flash", realname: "Barry Allen", powers: "Super Speed"},
  {name: "Aquaman", realname: "Arthur Curry", powers: "Atlanta Powers"},
  {name: "Green Lantern", realname: "Hal Jordan", powers: "Ring Powers"},
  {name: "Martian Manhunter", realname: "J'onn J'onzz", powers: "Martian Powers"},
  {name: "Cyborg", realname: "Victor Stone", powers: "Cyborg Powers"},
  {name: "Green Arrow", realname: "Oliver Queen", powers: "Bow Aim"},
];

@Component({
  selector: 'app-feature-henning',
  templateUrl: './feature-henning.component.html',
  styleUrls: ['./feature-henning.component.scss']
})
export class FeatureHenningComponent implements OnInit {

  displayedColumns: string[] = ['name', 'realname', 'powers'];
  dataSource = SuperHero_Data;

  constructor() { }

  ngOnInit(): void {
  }

}
