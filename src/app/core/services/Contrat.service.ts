import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  url='http://localhost:8005/SpringMVC/ReviewContrat';
  constructor(private httpclient:HttpClient) { }

  getContrat(){
    return this.httpclient.get(this.url+'/getcontrats');
  }
  getByType(type_contrat: string){
    return this.httpclient.get(`${this.url}/getContratByType/${type_contrat}`);
  }

}
