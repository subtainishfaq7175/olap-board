import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html'})
export class CategoryComponent implements OnInit {
  @Input() colomValues:Array<string> = [];
  transferDataSuccess (ev){
    console.log(ev);
    //check if the element with unique id is present or not
    this.colomValues.push(ev.dragData);
  }
  dragStarted (ev){
    //check and remove element from previous list

  }
  constructor() { }

  ngOnInit() {
  }

}
