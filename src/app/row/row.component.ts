import { Component, OnInit } from '@angular/core';
import { ColomComponent } from '../colom';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html'
})
export class RowComponent implements OnInit {
  listBoxers:Array<string> = ['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya'];
  listTeamOne:Array<string> = [];
  listTeamTwo:Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
