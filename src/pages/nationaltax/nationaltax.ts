import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { SettingProvider } from '../../providers/settings/settings';
// import { ListPage } from '../list/list'
import { MyPage } from '../my/my';
import { Http, Headers } from '@angular/http';
import { AppConfig } from '../../app/app.config';

// declare var echarts;//设置echarts全局对象

@Component({
  selector: 'page-nationaltax',
  templateUrl: 'nationaltax.html'
})
export class NationaltaxPage {

  @ViewChild('EchartsContent') container: ElementRef;

  selectedTheme: String;
  chartOption: any;
  EChart: any;

  folderList = [];
  navList:any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private settings: SettingProvider,
    private http: Http,
  ) {
    // 获取当前主题
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ionViewDidEnter() {


  }

  getFolderList() {
    console.log('Home page get folder list');
    // console.log(localStorage['session_token']);
    let headers = new Headers({ 'Authorization': 'JWT '+localStorage['session_token'] });
    // let token = JSON.parse(localStorage['session_token']).token;
    // let headers = new Headers({ 'Authorization': 'token' });

    return this.http
      .get(AppConfig.getHostUrl() + '/sci/bdp/api/folder_sub', { headers: headers })
      .toPromise()
      .then(response => {
        console.log('folderlist response',response.json());

        this.folderList = response.json().subs;
        return response;
      },(res)=>{
        console.log('on rejected');
        console.log(res.status);

        return res;
      })
      .catch(this.handleError);
  }

  getNavList(){
    console.log('Home page get nav list');
    // console.log(localStorage['session_token']);
    let headers = new Headers({ 'Authorization': 'JWT '+localStorage['session_token'] });
    // let token = JSON.parse(localStorage['session_token']).token;
    // let headers = new Headers({ 'Authorization': 'token' });
    return this.http
      .get(AppConfig.getHostUrl() + '/sci/bdp/api/folders', { headers: headers })
      .toPromise()
      .then(response => {
        console.log('navList response',response.json());

        this.navList = response.json().folders;
        return response;
      },(res)=>{
        console.log('on rejected');
        console.log(res);
        return res;
      })
      .catch(this.handleError);
  }

  navTo(id) {

    this.navCtrl.push(MyPage, {
      id: id,
      folderList:this.folderList
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
