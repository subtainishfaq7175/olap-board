import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {DndModule} from 'ng2-dnd';


import { AppComponent } from './app.component';
import { ConstantsService } from './common/contants.service';
import { StoryComponent } from './story-board/story/story.component';
import { TaskComponent } from './story-board/story/task/task.component';
import { CategoryComponent } from './story-board/story/category/category.component';
import { StoryBoardComponent } from './story-board/story-board.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    TaskComponent,
    CategoryComponent,
    StoryBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()

  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
