import { Component } from '@angular/core';
import {StoriesService} from "./rest-client/stories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[StoriesService],

})
export class AppComponent
{
  constructor(private stories : StoriesService){}

getRequest()
{
  this.stories.getStories().subscribe();
}
}
