import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() listItem:string;
  @Input() listItemIndex:number;
  constructor() { }

  ngOnInit() {
  }

}
