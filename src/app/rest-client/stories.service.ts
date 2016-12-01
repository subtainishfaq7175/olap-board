import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ConstantsService} from "../common/contants.service"

@Injectable()
export class StoriesService {

  constructor(private http:Http,private constService :ConstantsService ) { }

  public getStories()
  {
   return this.http.get(this.constService.apiBaseUrl+"Stories/Stories");
  }

  public getStoryById(id:string)
  {
   return this.http.get(this.constService.apiBaseUrl+"Stories/Story/"+id);
  }

  public updateStoryById(id:string)
  {
   return this.http.put(this.constService.apiBaseUrl+"Stories/Story/"+id,{});
  }

  public deleteStoryById(id:string)
  {
   return this.http.delete(this.constService.apiBaseUrl+"Stories/Story/"+id);
  }

  public postStory()
  {
   return this.http.post(this.constService.apiBaseUrl+"Stories/Story/",{});
  }

  public getStoryBoards()
  {
   return this.http.get(this.constService.apiBaseUrl+"Stories/StoryBoards");
  }

  public getStoryBoardsById(id:string)
  {
   return this.http.get(this.constService.apiBaseUrl+"Stories/StoryBoard/"+id);
  }

  public updateStoryBoardsById(id:string)
  {
   return this.http.put(this.constService.apiBaseUrl+"Stories/StoryBoard/"+id,{});
  }

  public deleteStoryBoardsById(id:string)
  {
   return this.http.delete(this.constService.apiBaseUrl+"Stories/StoryBoard/"+id);
  }

  public postStoryBoards()
  {
   return this.http.post(this.constService.apiBaseUrl+"Stories/StoryBoards",{});
  }


}
