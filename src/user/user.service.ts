import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private apiHost: string = 'https://jsonbin.io';

  constructor(private http: Http) {
  }

  public login(email:string, password:string):Observable<any> {
    return this.http.get(this.apiHost+"/b/59e560b708be13271f7df4ff").map((response) => {
      return response.json();
    })
      .catch((err) => {
        throw Observable.throw(err);
      });
  }
}
