import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: 'story.component.html'
})
export class StoryComponent implements OnInit {
  listBoxers:Array<string> = ['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya'];
  listTeamOne:Array<string> = [];
  listTeamTwo:Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
