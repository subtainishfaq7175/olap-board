import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ConstantsService} from "../common/contants.service";
import {Observable} from "rxjs";

@Injectable()
export class ClientsService {

  constructor(private http:Http,private constService :ConstantsService ) { }

  public getClients()
  {
    return this.http.get(this.constService.apiBaseUrl+"Clients/Clients");
  }

  public getClientById(id:string)
  {
    return this.http.get(this.constService.apiBaseUrl+"Clients/Client/"+id);
  }

  public updateClientById(id:string)
  {
    return this.http.put(this.constService.apiBaseUrl+"Clients/Client/"+id,{});
  }

  public deleteClientById(id:string)
  {
    return this.http.delete(this.constService.apiBaseUrl+"Clients/Client/"+id);
  }

  public postClient()
  {
    return this.http.post(this.constService.apiBaseUrl+"Clients/Client/",{});
  }


}
