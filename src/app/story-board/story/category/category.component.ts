import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html'})
export class CategoryComponent implements OnInit {
  @Input() colomValues:Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
