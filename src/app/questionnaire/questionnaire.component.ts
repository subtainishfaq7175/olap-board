import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "./model/question.model";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit {
  currentQuestion=0;

  // in future get this from service=>webservice=>server
  question1:QuestionModel=new QuestionModel("Jaké máš znalosti PHP ?"," Neznám ",['Lavarell', 'Symfony', 'Zend', 'Nette', 'CakePHP'],[],[],[]);
  question2:QuestionModel=new QuestionModel("Jaké máš znalosti JavaScript ?","Neznám ",['Angular.js', 'Backbone.js', 'Knockout.js', 'Ember.js'],[],[],[]);
  question3:QuestionModel=new QuestionModel("Jaké máš znalosti JavaScript ?","libraries",['React.js', 'jQuery', 'Meteor', 'Rendr'],[],[],[]);
  question4:QuestionModel=new QuestionModel("Jaké máš znalosti CSS ?","Neznám ",['Bootstrap', 'Foundation', 'Semantic', 'UI', 'YAML'],[],[],[]);
  question5:QuestionModel=new QuestionModel("Jaké máš znalosti CSS ?","preprocesors",['SASS', 'LESS', 'Stylsu', 'Scss', 'Campass'],[],[],[]);

  nextQuestion()
  {
    this.currentQuestion++;
  }

  prevQuestion(){
    this.currentQuestion--;
  }
  constructor() { }

  ngOnInit() {
  }

}
