import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ConstantsService} from "../common/contants.service";
import {Observable} from "rxjs";

@Injectable()
export class TasksService {

  constructor(private http:Http,private constService :ConstantsService ) { }

  public getTasks()
  {
    return this.http.get(this.constService.apiBaseUrl+"Tasks/Tasks");
  }

  public getTaskById(id:string)
  {
    return this.http.get(this.constService.apiBaseUrl+"Tasks/Task/"+id);
  }

  public updateTaskById(id:string)
  {
    return this.http.put(this.constService.apiBaseUrl+"Tasks/Task/"+id,{});
  }

  public deleteTaskById(id:string)
  {
    return this.http.delete(this.constService.apiBaseUrl+"Tasks/Task/"+id);
  }

  public postTask()
  {
    return this.http.post(this.constService.apiBaseUrl+"Tasks/Task/",{});
  }



}
