import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import {HTTP,HTTPResponse} from '@ionic-native/http';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from "../../app/app.config";
// import { stringify } from '@angular/core/src/render3/util';
import { AlertController} from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';


@Injectable()

export class AuthProvider {

  constructor(
    // private http: Http,
    private http: HttpClient,
    private alertCtrl: AlertController,
    // private header:HttpHeaders,
    // private  http2res:HTTPResponse
  ) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  // private response;
  // private headers = new HttpHeaders().set({'Content-Type':'application/json','ttt':'tttt2'});
  // header=this.headers.append('ttt','tttt2');


  getToken(data: object): Promise<any> {
    return this.http
      .post(AppConfig.getHostUrl() + '/auth/api-token-auth/', JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(
        (response) => {
          //存token
          // console.log(response.status);
          if (response['token']) {
            localStorage['token']= JSON.stringify(response);
            // console.log('token get succeed!');
            return true;
          }
        },
        (response) => {
          // console.log(response.status);
          let alert = this.alertCtrl.create({
            title: 'Token get Failed',
            subTitle: 'request Failed',
            buttons: ['OK']
          });
          alert.present();
        })
      .catch(this.handleError);
  }

  refreshToken(): Promise<any> {
    // this.headers=this.headers.append('Authorization','JWT '+localStorage['session_token'])
      //10.116.47.43:8888/web
    let data ={token:localStorage['session_token']};
      return this.http
        .post(AppConfig.getHostUrl() + '/auth/api-token-refresh/', JSON.stringify(data), { headers: this.headers })
        // .post('http://localhost:8888/web', JSON.stringify(localStorage['session_token']), { headers: this.headers })
        .toPromise()
        .then((response) => {
            // console.log('onfulfill');
            // console.log(response);
            // console.log(response.status);
            let res = response;
            localStorage['session_token']=res['token'];
            return response;
          // console.log('response', response);
          // if (response['token']) {
          //   JSON.stringify(response)

          // }
        },
          (response) => {
            // console.log('promise on rejected');
            // console.log(response.status);
            return response;
            //Token has been over valid
            // let alert = this.alertCtrl.create({
            //   title: 'Token verify Failed',
            //   subTitle: 'request Failed',
            //   buttons: ['OK']
            // });

            // alert.present();
            }
        )
        .catch(this.handleError);

  }

  /*tester(){

    const headers2 = new HttpHeaders().set("X-CustomHeader","custom header value");
    let data2 = {username: "test", password: "12334test"};
    this.http.post('http://localhost:8888/web',data2  ,{headers:headers2})
    // .post('http://10.116.18.75:8000/auth/api-token-auth/', JSON.stringify(data) ,{headers:this.headers})
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",

            val);
         return  val;
        },
        response => {
          console.log("POST call in error", response);
          return response
        },
        () => {
          console.log("The POST observable is now completed.");
          return ("done");
        });
  }*/

  // api_auth_token(data:object){
  //   // {"username":"test","password":"1234test"}
  //   // console.log(JSON.stringify(data));
  //   // this.headers =  this.headers.append('wuqihahaha','hahahaha');
  //
  //   this.http
  //     // .post('http://localhost:8888/web', JSON.stringify(data) ,{headers:this.headers})
  //      .post(AppConfig.getHostUrl()+'/auth/api-token-auth/', JSON.stringify(data) ,{headers:this.headers})
  //     // .post('http://10.116.18.75:8000/auth/api-token-auth/', JSON.stringify(data) ,{headers:this.headers})
  //     .subscribe(
  //       (res) => {
  //         // console.log("POST call successful value returned in body");
  //         // console.log(res);
  //         this.response = res;
  //         //return res;
  //       },
  //       err => {
  //         // console.log("POST call in error");
  //         // console.log(err);
  //         this.response = err;
  //         //return err;
  //       },
  //       () => {
  //         console.log("The POST observable is now completed.");
  //         //return ("done");
  //         console.log(this.response);
  //         return this.response;
  //       });
  //     // return  'hahah ';
  //   // console.log(this.response);
  //   // return this.response;
  // }
  // verifyToken(): Promise<any> {

  //   if (localStorage['token']) {
  //     return this.http
  //       .post(AppConfig.getHostUrl() + '/auth/api-token-verify/', localStorage.getItem('token'), { headers: this.headers })
  //       .toPromise()
  //       .then((response) => {
  //         console.log('response', response);
  //         if (response['token']) {
  //           localStorage.setItem('token', JSON.stringify(response));
  //           return true;
  //         }
  //       },
  //         (response) => {
  //           //Token has been over valid
  //           let alert = this.alertCtrl.create({
  //             title: 'Token verify Failed',
  //             subTitle: 'request Failed',
  //             buttons: ['OK']
  //           });
  //           alert.present();
  //         }
  //       )
  //       .catch(this.handleError);
  //   }
  // }



  /*api_auth_token2(username,password):Promise<any>{
    let data = { username: username, password:password};
    console.log(JSON.stringify(data));
    this.http
      .post(AppConfig.getHostUrl() + '/auth/api-token-auth/', JSON.stringify(data))
      .timeout(AppConfig.getTimeout())
      .subscribe(
        (response) => {
          return response.json();
          console.log(response.json());
          let res = response.json();
          // loading.dismiss();
          if (res.success) {
            AppConfig.setToken(localStorage['auth_token']);
            // this.navCtrl.setRoot(HomePage);
          }
        }, response => {
          return response.json();
          console.log(response);
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Auto login failed',
            subTitle: 'session invalid',
            buttons: ['OK']
          });
          alert.present();
          localStorage['auth_token'] = 'undefined';

          // this.navCtrl.setRoot(HomePage);
        }
        )

  }*/


  private handleError(error: any): Promise<any> {
    console.log(error);
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
