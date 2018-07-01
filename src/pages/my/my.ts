import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { AppConfig } from '../../app/app.config';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  @ViewChild(Nav) nav: Nav;

  title: string;
  menuList = [];
  fileList = [];
  showHomeicon: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
  ) {
  }

  ionViewDidLoad() {
    this.menuList = this.navParams.get('folderList');
    let id = this.navParams.get('id');

    this.menuList.forEach(item => {
      if (item.id == id) {
        this.title = item.name;
      }
    });

    // if (id.length) {
      let headers = new Headers({ 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA5MzI2MDksImlhdCI6MTUyODM0MDYwOSwibmJmIjoxNTI4MzQwNjA5LCJpZGVudGl0eSI6MTN9.7_gFKp2vu6fV8nWzaGEoGN0F1JU0GQKR37qNO7macVo' });
      return this.http
        .get(AppConfig.getHostUrl() + '/sci/bdp/api/folder_sub?id=' + id, { headers: headers })
        .toPromise()
        .then(response => {

          this.fileList = response.json().subs;
          this.fileList.forEach(item => {

            if (item.type == "file") {
              item['icon'] = "document";
            } else {
              item['icon'] = "folder";
            }
          })
        })
        .catch(this.handleError);
    // }
  }

  toHome() {
    this.navCtrl.popToRoot();
  }



  openPage(title) {
    console.log('title', title);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
