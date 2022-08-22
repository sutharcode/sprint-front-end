import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './model/Books';
import { Admin } from './model/Admin';
import { Reader } from './model/Readers';



@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(private httpClient: HttpClient) { }
  logInReaderurl:string="http://localhost:3000/add-reader";


  public logInReader(readerName:string,readerPwd:string):Observable<any>{
    const url = `${this.logInReaderurl}/${readerName}-${readerPwd}`;
    return this.httpClient.get(url);
  }
}
