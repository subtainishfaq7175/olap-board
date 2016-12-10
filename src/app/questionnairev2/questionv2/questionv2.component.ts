import {Component, OnInit, Input} from '@angular/core';
import {QuestionModel} from "../../questionnaire/model/question.model";
import {Questionv2Model} from "../model/questionv2.model";
import {QuestionRowModel} from "../model/questionv2.row.model";

@Component({
  selector: 'app-questionv2',
  templateUrl: './questionv2.component.html'
})
export class Questionv2Component implements OnInit {
  @Input() questionContent:Questionv2Model;

  constructor() { }

  ngOnInit() {
  }

}
