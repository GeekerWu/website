import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/timeout';
// import { Buffer } from 'buffer';
import { HomePage } from '../home/home';
import { AppConfig } from '../../app/app.config';
import { AuthProvider } from '../../providers/authtoken/authtoken';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  rememberMe;
  username = "";
  password = "";
  password_encryption="";
  otpCode = "";

  constructor(
    private http: Http,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private authToken: AuthProvider,
    public loadingCtrl: LoadingController) {
  }
  private headers = new Headers({ 'Content-Type': 'application/json' });
  toggle(toggle: HTMLInputElement) {
    console.log('remember flag is: ' + toggle);
  }




  ionViewDidLoad() {
    // console.log(localStorage['hostname'] == undefined);
    console.log(localStorage['remember']);
    if (localStorage['hostname'] != 'planningmdev.lenovo.com' && localStorage['hostname'] != 'planningm.lenovo.com') {
      localStorage['hostname'] = 'planningmdev.lenovo.com'
      // this.serverchange();
    };

    /*let loading = this.loadingCtrl.create({
      content: 'Auto login...'
    });*/
    // console.log(localStorage['session_token']);
    //token通过则自动登录
   /* if (localStorage['token'] && localStorage['token'].token.length) {
      this.navCtrl.setRoot(HomePage);
    }
*/
    if(localStorage['remember']=='true') {
      this.rememberMe = localStorage['remember'];
      if(this.rememberMe=='true'){
        this.username=localStorage['username'];
        this.password=localStorage['password'];
        if(localStorage['session_token']!= 'undefined'&& localStorage['session_token']!= ''){
          console.log('calling refresh token');
          let promise = this.authToken.refreshToken();
          promise.then(
            (res)=>{
              console.log('fulfill');
              console.log(res.hasOwnProperty("token"));
              if (res.hasOwnProperty('token')){
                this.navCtrl.setRoot(HomePage);
              }else{
                if (res.error.hasOwnProperty('non_field_errors')){
                  let alert = this.alertCtrl.create({
                    title: 'auto login failed',
                    // subTitle:'request timeout,switch server',
                    subTitle: res.error['non_field_errors'],
                    buttons: ['OK']
                  });
                  alert.present();
                }else{
                  let alert = this.alertCtrl.create({
                    title: 'auto login failed',
                    // subTitle:'request timeout,switch server',
                    subTitle: res.error,
                    buttons: ['OK']
                  });
                  alert.present();
                }
              }
            },(err)=>{
              // console.log(err);
              console.log('err');
              let alert = this.alertCtrl.create({
                title: 'auto login failed',
                subTitle:err,
                buttons: ['OK']
              });
              alert.present();

            }
          );
        };
      };
    }




  }

  serverchange() {
    let alert = this.alertCtrl.create({
      title: 'server choose',
      subTitle: 'select your environment',
      inputs: [
        {
          type: 'radio',
          label: 'PRD  Available' +
            '',
          value: 'planningm.lenovo.com'
        }
        ,
        {
          type: 'radio',
          label: 'Dev Available' +
            '',
          value: 'planningmdev.lenovo.com'
          // value: 'planningm.lenovo.com'
        }
      ],
      buttons: [
        {
          text: 'Confirm',
          role: 'confirm',
          handler: data => {
            localStorage['hostname'] = data;
            console.log('confirm clicked' + data);
          }
        }
      ]
    });
    alert.present();
  };

  logIn_timeout() {
    if (this.username.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Input Username',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.password.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Input Password',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.otpCode.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Input otpCode',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.otpCode.length != 6) {

      let alert = this.alertCtrl.create({
        title: 'otpCode should  6 numbers',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      let loading = this.loadingCtrl.create({
        content: 'loading...'
      });

// Login Request
      let data = { username: this.username, password: this.password, otpcode:this.otpCode };
      console.log(JSON.stringify(data));
      this.http.post(AppConfig.getHostUrl() + '/auth/api-token-auth/', JSON.stringify(data), { headers: this.headers })
        .timeout(AppConfig.getTimeout())
        .subscribe(response => {
          // console.log('response', response.json());
          let res = response.json();
          loading.dismiss();
          // debugger;
          if (res['token']) {
          //  console.log(res['token'])
            localStorage['session_token']= res['token'];
            localStorage['username'] = this.username;
            localStorage['password'] = this.password;
            localStorage['remember'] = this.rememberMe;
            this.navCtrl.setRoot(HomePage);
          }

          // //用户名密码正确时
          // if (res) {
          //
          //   //如果勾选rememberMe此处存储  默认不勾选
          //   // if (this.rememberMe) {
          //   //   localStorage['username'] = this.username;
          //   //   console.log(localStorage['username']);
          //   //   localStorage['password'] = this.password;
          //   //   console.log(localStorage['password']);
          //   // }
          //   //token
          //   let hasToken;
          //   if (!localStorage['token']) {
          //     //没有token 获取
          //     hasToken = this.authToken.getJWTToken(data);
          //   } else {
          //     //有token  验证
          //     hasToken = this.authToken.refreshToken();
          //   }
          //
          //   //token通过,登陆
          //   if (hasToken['__zone_symbol__value']) {
          //     console.log('has', hasToken);
          //
          //   }
          // }
        },
          err => {
            // console.log(err.json());
            let res = err.json();
            // console.log(res);
            loading.dismiss();
            if (res['non_field_errors']){
              let alert = this.alertCtrl.create({
                title: 'server error',
                // subTitle:'request timeout,switch server',
                subTitle: res['non_field_errors'],
                buttons: ['OK']
              });
              alert.present();
            }

          },
          () => {
            // let status = JSON.stringify("complete");
            // console.log(status);
            // loading.dismiss();
          });
      }
    }

  remberMechange(){
      console.log(this.rememberMe);
      if(this.rememberMe){
        localStorage['username']=this.username;
        localStorage['passsword']=this.password;
      }if(this.rememberMe==false){
        localStorage['username']='';
        localStorage['passsword']='';
    }
  }

}





  /*    loading.present();
      let lenovo = 'lenovo';
      let appkey = '3BA6030D88404F3CAC943B1598341FBB';
      let url = `https://wngfp.unifiedcloud.lenovo.com/v1/tenants/${lenovo}/apps/${appkey}/service/two-factor-auth/ad/token`;
      let password1 = new Buffer(this.password).toString('base64');
      console.log('password1==========' + 　password1);
      let password2 = new Buffer(password1).toString('base64');
      this.password_encryption = password2;
      let otpCodeData = { type: "JS", username: this.username, password: this.password_encryption, otpCode: this.otpCode };
      console.log(url);
      console.log('otpCodeData==' + JSON.stringify(otpCodeData));
      this.http.post(url, JSON.stringify(otpCodeData), { headers: this.headers })
        .timeout(AppConfig.getTimeout())
        .subscribe(response => {
          console.log(response);
          console.log(response.json());
          let OtpRes = response.json();
          loading.dismiss();
          if (OtpRes.token && OtpRes.token.length > 0) {
            localStorage['session_token'] = OtpRes.token;
            console.log('localStorage' + localStorage['session_token']);
            localStorage['username'] = this.username;
            localStorage['password'] = this.password;
            localStorage['remember'] = this.rememberMe;
            AppConfig.setToken(localStorage['session_token']);
            //PIN number check timeout
            // this.homeService.timeCount();
            this.navCtrl.setRoot(HomePage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Invalid otpCode',
              buttons: ['OK']
            });
            alert.present();
          }
        }, err => {
          console.log('otpCode' + err);
          let OtpRes = JSON.stringify(err);
          console.log(OtpRes);
          //
          let alert = this.alertCtrl.create({
            title: 'otpCode server not available',
            subTitle: OtpRes,
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        }, () => {
          let status = JSON.stringify("otpCode complete");
          console.log(status);
          // loading.dismiss();
        });
    }
  }
}*/
