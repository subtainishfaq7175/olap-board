import { Component, OnInit } from '@angular/core';
import {Questionv2Model} from "./model/questionv2.model";
import {QuestionRowModel} from "./model/questionv2.row.model";

@Component({
  selector: 'app-questionnairev2',
  templateUrl: './questionnairev2.component.html'
})
export class Questionnairev2Component implements OnInit {
  currentQuestion=0;
  // in future get this from service=>webservice=>server
  //question1:QuestionModel=new QuestionModel("Jaké máš znalosti PHP ?"," Neznám ",['Lavarell', 'Symfony', 'Zend', 'Nette', 'CakePHP'],[],[],[]);
  //question2:QuestionModel=new QuestionModel("Jaké máš znalosti JavaScript ?","Neznám ",['Angular.js', 'Backbone.js', 'Knockout.js', 'Ember.js'],[],[],[]);
  //////
  question1:Questionv2Model=new Questionv2Model("Jaké máš znalosti PHP ?"," Neznám ",[ new QuestionRowModel ('Lavarell'),new QuestionRowModel ('Symfony'),new QuestionRowModel ('Symfony'),new QuestionRowModel ('Zend'),new QuestionRowModel ('Nette'),new QuestionRowModel ('CakePHP' )]);
  question2:Questionv2Model=new Questionv2Model("Jaké máš znalosti JavaScript ?","Neznám ",[new QuestionRowModel('Angular.js' ), new QuestionRowModel ('Backbone.js' ), new QuestionRowModel('Knockout.js' )]);
  question3:Questionv2Model=new Questionv2Model("Jaké máš znalosti JavaScript ?","libraries",[new QuestionRowModel('React.js'), new QuestionRowModel('jQuery'), new QuestionRowModel('Meteor'), new QuestionRowModel('Rendr')]);
  question4:Questionv2Model=new Questionv2Model("Jaké máš znalosti CSS ?","Neznám ",[new QuestionRowModel('Bootstrap'), new QuestionRowModel('Foundation'), new QuestionRowModel('Semantic'), new QuestionRowModel('UI'), new QuestionRowModel('YAML')]);
  question5:Questionv2Model=new Questionv2Model("Jaké máš znalosti CSS ?","preprocesors",[new QuestionRowModel('SASS'), new QuestionRowModel('LESS'), new QuestionRowModel('Stylsu'), new QuestionRowModel('Scss'), new QuestionRowModel('Campass')]);

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
