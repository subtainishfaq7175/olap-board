/**
 * Created by subtainishfaq on 12/8/16.
 */

export class QuestionModel {
  constructor (public title:string="Default", public subtitle:string="Default",
               public  options:Array<string>,
               public  beginer:Array<string>,
               public  intermediat:Array<string>,
               public  expert:Array<string>,
               ){}
}
