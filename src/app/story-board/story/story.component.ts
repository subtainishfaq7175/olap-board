import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: 'story.component.html'
})
export class StoryComponent implements OnInit {
  @Input() listBoxers:Array<string> ;//=
  listTeamOne:Array<string> = [];
  listTeamTwo:Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
