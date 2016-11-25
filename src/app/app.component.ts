import { Component } from '@angular/core';
import { ColomComponent } from './colom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  direvtives : [ColomComponent]
})
export class AppComponent {
  listBoxers:Array<string> = ['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya'];
  listTeamOne:Array<string> = [];
  listTeamTwo:Array<string> = [];
}
