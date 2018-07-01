import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingProvider } from '../providers/settings/settings';

import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { ListPage } from '../pages/list/list';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  defaultTheme: boolean = true;
  checksTheme: boolean = false;
  selectedTheme: String;
  footerpages:any;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, private settings: SettingProvider,
     public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  initializeApp() {

    this.pages = [
      { title: 'Home', component: HomePage,icon:'home' },
      { title: 'My folders', component: ListPage,icon:'folder' },
      { title: 'Contact us', component: '',icon:'call' },
    ];

    this.footerpages = [
      {title:'Settings',icon:'settings'},
      {title:'Logout',icon:'power'},
    ]

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page.title)
    this.nav.setRoot(page.component);
    // if (footerpages.title == 'Logout'){

    //   localStorage['session_token'] = 'undefined';
    //   localStorage['username'] = 'undefined';
    //   localStorage['password'] = 'undefined';
    //   window.location.reload(true);

    // }
    // else{
    //   this.nav.setRoot(page.component);
    // }
  }

  logOut(e) {
    console.log('this===',e);
      // localStorage['session_token'] = 'undefined';
      // localStorage['username'] = 'undefined';
      // localStorage['password'] = 'undefined';
      // window.location.reload(true);
       if (e == 'Logout'){
      localStorage['session_token'] = 'undefined';
      if(localStorage['remember']=='false'){
        localStorage['username'] = '';
        localStorage['password'] = '';
      }

      window.location.reload(true);

    }
  }

  ThemeChange(e) {
    console.log('this1111.',e);
    console.log('this.',e.checked);
    console.log('selectedTheme.',this.selectedTheme);

    //light
    if(e.id == "checkbox-11-0" && this.selectedTheme === 'dark-theme' && e.checked){
      this.settings.setActiveTheme('light-theme');
      this.checksTheme = false;
    }

    //dark
    if(e.id == "checkbox-12-0" && this.selectedTheme === 'light-theme' && e.checked){
      this.settings.setActiveTheme('dark-theme');
      this.defaultTheme = false;
    }


    // if (this.selectedTheme === 'dark-theme' && e.checked ) {
    //   //改变
    //   this.settings.setActiveTheme('light-theme');
    // } else {
    //   this.settings.setActiveTheme('dark-theme');
    // }
  }
}
