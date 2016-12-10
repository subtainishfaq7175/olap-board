import {Component, OnInit, Input} from '@angular/core';
import {QuestionModel} from "../model/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {
    @Input() questionContent:QuestionModel;

  constructor() { }

  ngOnInit() {
  }

}
