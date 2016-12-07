import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-board',
  templateUrl: './story-board.component.html'
})
export class StoryBoardComponent implements OnInit {
  var1 : Array<string> =['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya'];
  var2 : Array<string> =['subtain','ahmad','hassan'];
  constructor() { }

  ngOnInit() {
  }

}
