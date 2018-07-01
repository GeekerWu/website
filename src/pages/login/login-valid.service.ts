import { Injectable } from '@angular/core';
import { Http,  Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import {AppConfig} from "../../app/app.config";

@Injectable()
export class LoginValidService {

  constructor(private http: Http) {

  }
  // private headers = new Headers({'Content-Type': 'application/json'});
  datazenLogin():Promise<any>
  {
    let headers = new Headers({'Cookie': 'session_token:'+AppConfig.getToken()});
    return this.http
      .get(AppConfig.getHostUrl()+'/viewer/login?session_token='+AppConfig.getToken(),{headers:headers})
      .toPromise()
      .then(response => {
        debugger;
        return null;
      })
      .catch(this.handleError);
  }

  /*autologin(session_token:object):Promise<any>{
    let host = localStorage['hostname'];
    console.log(JSON.stringify(session_token));
    return this.http
      .post('http://'+host+'/api/auth/token_login', JSON.stringify(session_token))
      .timeout(AppConfig.getTimeout())
      .toPromise()
      .then(response => {
        console.log(response.json());
        debugger;
        return response.json();
      },response => {
        console.log(response.json());
        debugger;
        return 'Error';
      })
      .catch(this.handleError);
  }

  login(authInput: object): Promise<any> {
    // let host = localStorage['host'];
    return this.http
    // .post('http://'+host+'/api/auth/valid_login', JSON.stringify(authInput))
      .post(AppConfig.getHostUrl()+'/api/auth/valid_login', JSON.stringify(authInput),{headers:this.headers})
      .toPromise()
      .then(response => {
        console.log(response.json());
        debugger;
        return response.json();
      })
      .catch(this.handleError);
  }*/



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
