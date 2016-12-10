import { Injectable } from '@angular/core';
import {QuestionModel} from "./model/question.model";

@Injectable()
export class QuestionnaireService {

  //constructor() { }
  private  listBoxers:Array<string> = ['Laravel','test','Magento','cake-php'];
  private listTeamOne:Array<string> = [];
  private listTeamTwo:Array<string> = [];
  private listTeamThree:Array<string> = [];
  private question:QuestionModel=new QuestionModel("Whats you skill level","software Engineer",this.listBoxers,this.
    listTeamOne,this.listTeamTwo,this.listTeamThree);

  getData()
  {
    return this.question;
  }
}
