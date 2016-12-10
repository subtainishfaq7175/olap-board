import {QuestionRowModel} from "./questionv2.row.model";
/**
 * Created by subtainishfaq on 12/8/16.
 */

export class Questionv2Model {
  constructor (public title:string="Default", public subtitle:string="Default",
               public  rows:Array<QuestionRowModel>

  ){}
}
