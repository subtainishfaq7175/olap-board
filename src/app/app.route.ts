import {Questionnairev3Component} from "./questionnairev3/questionnairev3.component";
import {RouterModule, Routes} from "@angular/router";
import {Questionv3Component} from "./questionnairev3/questionv3/questionv3.component";
import {Questionv3q2Component} from "./questionnairev3/questionv3q2/questionv3q2.component";
/**
 * Created by subtainishfaq on 12/12/16.
 */
const APP_Routes : Routes=[
  {path :'',component: Questionv3Component},
  {path :'question2',component: Questionv3q2Component}
];

export const routing = RouterModule.forRoot(APP_Routes);
