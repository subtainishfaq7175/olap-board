import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ConstantsService} from "../common/contants.service";
import {Observable} from "rxjs";

@Injectable()

export class CodebooksService {


  constructor(private http:Http,private constService :ConstantsService ) { }

  public getTaskStates()
  {
    return this.http.get(this.constService.apiBaseUrl+"Codebooks/Taskstates");
  }

  public getTaskStateById(id:string)
  {
    return this.http.get(this.constService.apiBaseUrl+"Codebooks/Taskstate/"+id);
  }

  public updateTaskStateById(id:string)
  {
    return this.http.put(this.constService.apiBaseUrl+"Codebooks/Taskstate/"+id,{});
  }

  public deleteTaskStateById(id:string)
  {
    return this.http.delete(this.constService.apiBaseUrl+"Codebooks/Taskstate/"+id);
  }

  public postTaskState()
  {
    return this.http.post(this.constService.apiBaseUrl+"Codebooks/Taskstate/",{});
  }



  public getStoryStates()
  {
    return this.http.get(this.constService.apiBaseUrl+"Codebooks/StoryStates");
  }

  public getStoryStateById(id:string)
  {
    return this.http.get(this.constService.apiBaseUrl+"Codebooks/StoryState/"+id);
  }

  public updateStoryStateById(id:string)
  {
    return this.http.put(this.constService.apiBaseUrl+"Codebooks/StoryState/"+id,{});
  }

  public deleteStoryStateById(id:string)
  {
    return this.http.delete(this.constService.apiBaseUrl+"Codebooks/StoryState/"+id);
  }

  public postStoryState()
  {
    return this.http.post(this.constService.apiBaseUrl+"Codebooks/StoryState/",{});
  }

  public getTaskCategories()
  {
    return this.http.get(this.constService.apiBaseUrl+"Codebooks/TaskCategories");
  }

  public getTaskCategoryById(id:string)
  {
    return this.http.get(this.constService.apiBaseUrl+"Codebooks/TaskCategory/"+id);
  }

  public updateTaskCategoryById(id:string)
  {
    return this.http.put(this.constService.apiBaseUrl+"Codebooks/TaskCategory/"+id,{});
  }

  public deleteTaskCategoryById(id:string)
  {
    return this.http.delete(this.constService.apiBaseUrl+"Codebooks/TaskCategory/"+id);
  }

  public postTaskCategory()
  {
    return this.http.post(this.constService.apiBaseUrl+"Codebooks/TaskCategory/",{});
  }


}
