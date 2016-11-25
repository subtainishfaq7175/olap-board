import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-colom',
  templateUrl: './colom.component.html'
})
export class ColomComponent implements OnInit {
  @Input() colomValues:Array<string> = [];

  constructor() { }

  ngOnInit() {
  }


}
