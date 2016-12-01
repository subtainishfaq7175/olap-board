import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ConstantsService} from "../common/contants.service";
import {Observable} from "rxjs";

@Injectable()
export class ChatsService {


  constructor(private http:Http,private constService :ConstantsService ) { }

  public getStoryChats()
  {
    return this.http.get(this.constService.apiBaseUrl+"Chats/StoryChats");
  }

  public postStoryChat()
  {
    return this.http.post(this.constService.apiBaseUrl+"Chats/StoryChats/",{});
  }

  public getTaskChats()
  {
    return this.http.get(this.constService.apiBaseUrl+"Chats/TaskChats");
  }

  public postTaskChat()
  {
    return this.http.post(this.constService.apiBaseUrl+"Chats/TaskChat",{});
  }


}
