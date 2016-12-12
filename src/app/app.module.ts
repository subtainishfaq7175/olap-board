import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { MaterialModule } from '@angular/material';
import {DndModule} from 'ng2-dnd';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { ConstantsService } from './common/contants.service';
import { StoryComponent } from './story-board/story/story.component';
import { TaskComponent } from './story-board/story/task/task.component';
import { CategoryComponent } from './story-board/story/category/category.component';
import { StoryBoardComponent } from './story-board/story-board.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './questionnaire/question/question.component';
import { Questionnairev2Component } from './questionnairev2/questionnairev2.component';
import { Questionv2Component } from './questionnairev2/questionv2/questionv2.component';
import { Questionnairev3Component } from './questionnairev3/questionnairev3.component';
import { Questionv3Component } from './questionnairev3/questionv3/questionv3.component';
import {routing} from "./app.route";
import { Questionv3q2Component } from './questionnairev3/questionv3q2/questionv3q2.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    TaskComponent,
    CategoryComponent,
    StoryBoardComponent,
    QuestionnaireComponent,
    QuestionComponent,
    Questionnairev2Component,
    Questionv2Component,
    Questionnairev3Component,
    Questionv3Component,
    Questionv3q2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    DndModule.forRoot(),
    NgbModule.forRoot()

  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
